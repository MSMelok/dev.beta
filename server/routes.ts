import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body using Zod schema
      const messageData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const contactMessage = await storage.createContactMessage(messageData);
      
      // Respond with success
      res.status(201).json({ 
        message: "Message received successfully", 
        data: contactMessage 
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error("Contact form error:", error);
        
        // Provide better error messages for validation errors
        if (error.name === "ZodError") {
          const validationError = fromZodError(error);
          res.status(400).json({ message: validationError.message });
        } else {
          res.status(500).json({ message: error.message || "An error occurred" });
        }
      } else {
        res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error retrieving contact messages:", error);
      res.status(500).json({ message: "Failed to retrieve contact messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
