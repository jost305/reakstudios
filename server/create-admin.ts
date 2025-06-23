import { storage } from "./storage";
import bcrypt from "bcrypt";

async function createAdminUser() {
  try {
    const username = "admin";
    const password = "admin123"; // Change this to a secure password
    
    // Check if admin already exists
    const existingAdmin = await storage.getUserByUsername(username);
    if (existingAdmin) {
      console.log("Admin user already exists");
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin user
    await storage.createUser({
      username,
      password: hashedPassword,
      role: "admin"
    });

    console.log("Admin user created successfully");
    console.log("Username: admin");
    console.log("Password: admin123");
    console.log("Please change the password after first login");
  } catch (error) {
    console.error("Error creating admin user:", error);
  }
}

if (require.main === module) {
  createAdminUser().then(() => process.exit(0));
}

export { createAdminUser };