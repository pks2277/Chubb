"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Form submission function
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    // Form validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields');
        return;
    }
    // MockAPI endpoint URL
    const apiUrl = 'https://6717faf8b910c6a6e02ac448.mockapi.io/ContactForm';
    try {
        // Send POST request to MockAPI
        const response = yield axios_1.default.post(apiUrl, {
            name,
            email,
            contact,
            subject,
            message,
        });
        // Show success message
        alert('Form Submitted Successfully');
    }
    catch (error) {
        // Handle error
        alert('Submission Failed');
        console.error(error);
    }
}));
