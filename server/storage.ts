import { users, contactSubmissions, type User, type InsertUser, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  deleteContactSubmission(id: number): Promise<void>;
  updateContactSubmissionStatus(id: number, status: string): Promise<ContactSubmission>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    try {
      const [user] = await db.select().from(users).where(eq(users.id, id));
      return user || undefined;
    } catch (error) {
      console.error('Database error in getUser:', error);
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const [user] = await db.select().from(users).where(eq(users.username, username));
      return user || undefined;
    } catch (error) {
      console.error('Database error in getUserByUsername:', error);
      return undefined;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    try {
      const [user] = await db
        .insert(users)
        .values(insertUser)
        .returning();
      return user;
    } catch (error) {
      console.error('Database error in createUser:', error);
      throw error;
    }
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    try {
      const [submission] = await db
        .insert(contactSubmissions)
        .values(insertSubmission)
        .returning();
      return submission;
    } catch (error) {
      console.error('Database error in createContactSubmission:', error);
      throw error;
    }
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    try {
      return await db.select().from(contactSubmissions);
    } catch (error) {
      console.error('Database error in getContactSubmissions:', error);
      return [];
    }
  }

  async deleteContactSubmission(id: number): Promise<void> {
    try {
      await db.delete(contactSubmissions).where(eq(contactSubmissions.id, id));
    } catch (error) {
      console.error('Database error in deleteContactSubmission:', error);
      throw error;
    }
  }

  async updateContactSubmissionStatus(id: number, status: string): Promise<ContactSubmission> {
    try {
      const [submission] = await db
        .update(contactSubmissions)
        .set({ status })
        .where(eq(contactSubmissions.id, id))
        .returning();
      return submission;
    } catch (error) {
      console.error('Database error in updateContactSubmissionStatus:', error);
      throw error;
    }
  }
}

export const storage = new DatabaseStorage();
