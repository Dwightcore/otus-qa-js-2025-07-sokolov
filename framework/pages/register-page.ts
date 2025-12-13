import { Locator, Page, expect } from '@playwright/test';
import BasePage from './base-page.js';
import Header from './fragments/header.js';

export default class RegisterPage extends BasePage {
    header: Header;
    private genderMale: Locator
    private genderFemale: Locator
    private firstName: Locator
    private lastName: Locator
    private email: Locator
    private company: Locator
    private newsLetterSubscriptions: Locator
    private password: Locator
    private confirmPassword: Locator
    private registerButton: Locator
    private resultMessage: Locator
    private errorValidation: Locator

    constructor(page: Page) {
        super(page);
        this.header = new Header(page);
        this.genderMale = page.locator('#gender-male');
        this.genderFemale = page.locator('#gender-female');
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.email = page.locator('#Email');
        this.company = page.locator('#Company');
        this.newsLetterSubscriptions = page.getByRole('checkbox', { name: /Newsletter/i });
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');
        this.registerButton = page.locator('#register-button');
        this.resultMessage = page.locator('.result');
        this.errorValidation = page.locator('.field-validation-error');
    }

    async open(): Promise<void> {
        await super.open('/register');
    }

    async selectGender(gender: 'male' | 'female'): Promise<void> {
        if (gender === 'male') {
            await this.genderMale.check();
        } else {
            await this.genderFemale.check();
        }
    }

    async fillFirstName(name: string): Promise<void> {
        await this.firstName.fill(name);
    }

    async fillLastName(name: string): Promise<void> {
        await this.lastName.fill(name);
    }

    async fillEmail(email: string): Promise<void> {
        await this.email.fill(email);
    }

    async fillCompany(company: string): Promise<void> {
        await this.company.fill(company);
    }

    async toggleNewsletter(subscribe: boolean ): Promise<void> {
        if (subscribe) {
            await this.newsLetterSubscriptions.check();
        } else {
            await this.newsLetterSubscriptions.uncheck();
        }
    }

    async fillPassword(password: string): Promise<void> {
        await this.password.fill(password);
    }

    async fillConfirmPassword(password: string): Promise<void> {
        await this.confirmPassword.fill(password);
    }

    async clickRegister(): Promise<void> {
        await this.registerButton.click();
    }

    async register(data: {
        gender?: 'male' | 'female';
        firstName: string;
        lastName: string;
        email: string;
        company?: string;
        newsletter?: boolean;
        password: string;
        confirmPassword?: string;
    }): Promise<void> {
        if (data.gender) {
            await this.selectGender(data.gender);
        }
        await this.fillFirstName(data.firstName);
        await this.fillLastName(data.lastName);
        await this.fillEmail(data.email);
        
        if (data.company) {
            await this.fillCompany(data.company);
        }
        
        if (data.newsletter !== undefined) {
            await this.toggleNewsletter(data.newsletter);
        }
        
        await this.fillPassword(data.password);
        await this.fillConfirmPassword(data.confirmPassword || data.password);
        await this.clickRegister();
    }

    async getSuccessMessage(): Promise<string> {
        return await this.resultMessage.textContent() || '';
    }

    async getErrorMessage(): Promise<string> {
        return await this.errorValidation.textContent() || '';
    }

    async expectSuccessfulRegistration(): Promise<void> {
        await this.getSuccessMessage();
        await expect(this.resultMessage).toContainText('Your registration completed');
    }

    async expectValidationError(errorText?: string): Promise<void> {
        await expect(this.errorValidation).toBeVisible();
        if (errorText) {
            await expect(this.errorValidation).toContainText(errorText);
        }
    }
}