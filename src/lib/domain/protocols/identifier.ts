export interface Identifier {
  generateRandomId(): string;
  isIdValid(value: string): boolean;
}
