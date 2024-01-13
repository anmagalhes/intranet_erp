type ValidationResult = {
    isValid: boolean;
    error?: string;
};

const validateEmail = (email: string ): ValidationResult => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return {
            isValid: false,
            error: 'Endereço de e-mail inválido',
        };
    }

    return {
        isValid: true,
    };
};

// Exemplo de uso:
const emailToValidate = 'example@example.com';
const validationResult = validateEmail(emailToValidate);

if (validationResult.isValid) {
    console.log('O e-mail é válido.');
} else {
    console.error(`Erro: ${validationResult.error}`);
}
