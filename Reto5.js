// Estás atrapado en Silent Hill, en una habitación cuadrada de tamaño n x n y el temido Pyramid Head (▲) está en algún lugar de la habitación, moviéndose hacia ti (T).

// Tú no puedes moverte, y Pyramid Head se mueve una celda por turno, en cualquiera de las cuatro direcciones cardinales (arriba, abajo, izquierda, derecha), 
// pero siempre elige el camino más corto hacia tu posición. Tu objetivo es determinar si Pyramid Head puede alcanzarte.

// La habitación está representada por una matriz n x n:

// T: tu posición (donde te encuentras atrapado).
// ▲: la posición inicial de Pyramid Head.
// .: espacios vacíos donde Pyramid Head puede moverse.
// #: paredes que Pyramid Head no puede atravesar.
// Escribe una función que determine si Pyramid Head podrá alcanzarte. 
// Si Pyramid Head puede alcanzarte, devuelve el número de pasos con lo que lo puede lograr, si no puede alcanzarte entonces devuelve -1.


function escapePyramidHead(room) {
    const n = room.length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Direcciones: derecha, abajo, izquierda, arriba

    // Encuentra la posición de Pyramid Head (▲) y de la persona (T)
    let start = null, target = null;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (room[i][j] === '▲') start = [i, j];
            if (room[i][j] === 'T') target = [i, j];
        }
    }

    if (!start || !target) return -1; // Si no encontramos ni la persona ni Pyramid Head

    // BFS: Cola de celdas a explorar
    const queue = [[...start, 0]]; // Cola contiene [fila, columna, pasos]
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
        const [x, y, steps] = queue.shift();

        // Si llegamos a la posición de la persona, devolvemos los pasos
        if (x === target[0] && y === target[1]) {
            return steps;
        }

        // Explorar las direcciones vecinas
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // Comprobar si la nueva celda está dentro de los límites, no está visitada y no es una pared
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny]
                && room[nx][ny] !== '#') {
                visited[nx][ny] = true;
                queue.push([nx, ny, steps + 1]);
            }
        }
    }

    return -1; // Si no se puede llegar
}
