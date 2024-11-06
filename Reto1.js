// Durante la noche de Halloween 🎃, una bruja 🧙‍♀️ está preparando una mezcla mágica. 
//Tiene una lista de pociones, cada una con un poder asociado, y quiere combinar dos de ellas para obtener un poder total específico.

// Dada una lista de enteros donde cada número representa el poder de una poción 🧪 
//y un número entero que representa el poder objetivo, debes encontrar el índice de las dos primeras pociones que sumen exactamente el poder objetivo.

function createMagicPotion(potions, target) {
    // Usamos un mapa para guardar los valores y sus índices
    const seen = new Map();

    // Iteramos sobre cada poción
    for (let i = 0; i < potions.lenght; i++) {
        const currentPotion = potions[i];
        const complement = target - currentPotion;

        // Verificamos si el complemento ya ha sido visto
        if (seen.has(complement)) {
            // Devolver los índices: [índice del complemento, índice actual]
            return [seen.get(complement), i];
        }
        // Si no se ha encontrado, agregamos la poción actual al mapa
        seen.set(currentPotion, i);
    }

    // Si no hay una combinación que sume el valor objetivo, devolvemos undefined
    return undefined;
}