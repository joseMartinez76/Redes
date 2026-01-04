const questionsDB = {
    ut1: [
        {
            question: "¿Qué es una base de datos?",
            options: ["Un archivo ejecutable para el sistema operativo", "Un dispositivo de red para comunicaciones", "Un lenguaje de programación para páginas web", "Un sistema que organiza y almacena datos de forma estructurada"],
            correct: 3,
            explanation: "Una base de datos es un sistema que organiza y almacena datos de forma estructurada para facilitar su gestión y consulta.",
            topic: "Conceptos básicos"
        },
        {
            question: "¿Cuál es el propósito principal de una base de datos?",
            options: ["Diseñar gráficos vectoriales", "Almacenar, consultar y mantener datos de forma eficiente", "Codificar algoritmos de compresión", "Enviar correos electrónicos automáticamente"],
            correct: 1,
            explanation: "El propósito principal de una base de datos es almacenar, consultar y mantener datos de forma eficiente y organizada.",
            topic: "Conceptos básicos"
        },
        {
            question: "¿Quién formuló el modelo relacional de bases de datos?",
            options: ["Charles Babbage", "Edgar F. Codd", "Alan Turing", "Tim Berners-Lee"],
            correct: 1,
            explanation: "Edgar F. Codd formuló el modelo relacional de bases de datos en 1970 mientras trabajaba en IBM.",
            topic: "Historia"
        },
        {
            question: "¿Qué estructura utiliza el modelo relacional?",
            options: ["Registros cifrados en XML", "Tablas compuestas por filas y columnas", "Árboles de decisión jerárquicos", "Documentos PDF incrustados"],
            correct: 1,
            explanation: "El modelo relacional organiza los datos en tablas compuestas por filas (tuplas) y columnas (atributos).",
            topic: "Modelo relacional"
        },
        {
            question: "¿Qué define un fichero plano?",
            options: ["Un archivo HTML con código embebido", "Una tabla con claves foráneas complejas", "Un sistema de archivos en clúster", "Un archivo de texto con registros en líneas separadas y delimitados por símbolos"],
            correct: 3,
            explanation: "Un fichero plano es un archivo de texto simple con registros en líneas separadas, típicamente delimitados por comas, tabuladores u otros símbolos.",
            topic: "Tipos de ficheros"
        },
        {
            question: "¿Qué caracteriza a los ficheros secuenciales?",
            options: ["Integran estructuras en grafos", "Pueden cifrar los datos automáticamente", "Utilizan sistemas de réplica distribuida", "Se accede a los registros de forma ordenada y progresiva"],
            correct: 3,
            explanation: "Los ficheros secuenciales requieren acceso ordenado y progresivo a los registros, desde el principio hasta encontrar el deseado.",
            topic: "Tipos de ficheros"
        },
        {
            question: "¿Qué es un fichero indexado?",
            options: ["Un documento físico con enlaces manuales", "Una hoja de cálculo protegida", "Una copia de seguridad en cinta", "Un fichero que utiliza índices para localizar registros rápidamente"],
            correct: 3,
            explanation: "Un fichero indexado utiliza índices (estructuras auxiliares) para localizar registros de forma rápida sin recorrer todo el archivo.",
            topic: "Tipos de ficheros"
        },
        {
            question: "¿Qué hace un sistema gestor de bases de datos (SGBD)?",
            options: ["Diseña interfaces gráficas de usuario", "Gestiona exclusivamente datos multimedia", "Encripta todos los documentos del sistema", "Permite crear, modificar y consultar datos de forma estructurada"],
            correct: 3,
            explanation: "Un SGBD es software que permite crear, modificar, consultar y administrar bases de datos de forma estructurada y eficiente.",
            topic: "SGBD"
        },
        {
            question: "¿Qué nivel de abstracción corresponde al almacenamiento físico de datos?",
            options: ["Nivel externo", "Nivel conceptual", "Nivel sintáctico", "Nivel interno"],
            correct: 3,
            explanation: "El nivel interno o físico define cómo se almacenan físicamente los datos en el disco (archivos, índices, etc.).",
            topic: "Niveles de abstracción"
        },
        {
            question: "¿Qué tipo de base de datos almacena documentos con estructuras JSON?",
            options: ["Base de datos OLAP", "Base de datos secuencial", "Base de datos jerárquica", "Base de datos documental"],
            correct: 3,
            explanation: "Las bases de datos documentales (como MongoDB) almacenan documentos en formatos como JSON o BSON.",
            topic: "Tipos de bases de datos"
        },
        {
            question: "¿Qué modelo de datos utiliza relaciones entre nodos?",
            options: ["Modelo jerárquico", "Modelo físico", "Modelo en grafos", "Modelo OLTP"],
            correct: 2,
            explanation: "El modelo en grafos representa datos como nodos conectados por relaciones o aristas (Neo4j es un ejemplo).",
            topic: "Modelos de datos"
        },
        {
            question: "¿Qué tipo de sistema se emplea para gestionar transacciones rápidas y frecuentes?",
            options: ["OLTP", "Modelo orientado a objetos", "NoSQL", "OLAP"],
            correct: 0,
            explanation: "OLTP (Online Transaction Processing) está optimizado para gestionar transacciones rápidas y frecuentes en tiempo real.",
            topic: "Sistemas transaccionales"
        },
        {
            question: "¿Qué tipo de sistema se especializa en análisis de grandes volúmenes de datos?",
            options: ["Hashing", "Redis", "OLTP", "OLAP"],
            correct: 3,
            explanation: "OLAP (Online Analytical Processing) está diseñado para análisis complejos sobre grandes volúmenes de datos históricos.",
            topic: "Sistemas analíticos"
        },
        {
            question: "¿Cuál es una ventaja de los SGBD respecto a los ficheros tradicionales?",
            options: ["Consumen menos energía eléctrica", "Permiten relaciones entre datos y control de acceso", "Evitan la creación de backups", "Requieren menos conocimientos técnicos"],
            correct: 1,
            explanation: "Los SGBD ofrecen ventajas como relaciones entre datos, control de acceso, integridad referencial y gestión de concurrencia.",
            topic: "Ventajas SGBD"
        },
        {
            question: "¿Cuál es una característica del modelo clave-valor?",
            options: ["Utiliza exclusivamente memoria volátil", "Se basa en estructuras XML estrictas", "Cada fila debe contener al menos tres claves", "Cada registro está formado por una clave única y su valor asociado"],
            correct: 3,
            explanation: "El modelo clave-valor almacena datos como pares de clave única y valor asociado (Redis, DynamoDB son ejemplos).",
            topic: "NoSQL"
        },
        {
            question: "¿Qué es una vista en el contexto de una base de datos?",
            options: ["Un duplicado físico de otra tabla", "Una tabla virtual basada en una consulta", "Un backup temporal", "Un archivo indexado externo"],
            correct: 1,
            explanation: "Una vista es una tabla virtual definida por una consulta SQL que no almacena datos físicamente.",
            topic: "Objetos de base de datos"
        },
        {
            question: "¿Qué herramienta se usa habitualmente para consultas en bases de datos relacionales?",
            options: ["CSS", "Python", "SQL", "HTML"],
            correct: 2,
            explanation: "SQL (Structured Query Language) es el lenguaje estándar para consultar y manipular bases de datos relacionales.",
            topic: "Lenguajes de consulta"
        },
        {
            question: "¿Qué nivel de abstracción define la estructura lógica general de la base de datos?",
            options: ["Nivel interno", "Nivel conceptual", "Nivel externo", "Nivel de red"],
            correct: 1,
            explanation: "El nivel conceptual define la estructura lógica global de la base de datos, independiente de cómo se almacena o se ve.",
            topic: "Niveles de abstracción"
        },
        {
            question: "¿Qué nivel de abstracción presenta los datos de forma personalizada a cada usuario?",
            options: ["Nivel externo", "Nivel físico", "Nivel conceptual", "Nivel interno"],
            correct: 0,
            explanation: "El nivel externo o de vistas define cómo ven los datos los diferentes usuarios o aplicaciones.",
            topic: "Niveles de abstracción"
        },
        {
            question: "¿Qué sector usa las bases de datos para gestionar historias clínicas electrónicas?",
            options: ["Turismo", "Sanidad", "Educación", "Transporte"],
            correct: 1,
            explanation: "El sector sanitario utiliza bases de datos para gestionar historias clínicas electrónicas, citas, tratamientos, etc.",
            topic: "Aplicaciones sectoriales"
        }
    ],
    ut2: [
        {
            question: "¿Cuál es el objetivo principal del modelado de datos?",
            options: ["Implementar la base de datos en el sistema", "Realizar copias de seguridad de los datos", "Organizar los datos de forma lógica y eficiente", "Crear índices en tablas complejas"],
            correct: 2,
            explanation: "El objetivo principal del modelado de datos es organizar los datos de forma lógica y eficiente para su posterior implementación.",
            topic: "Modelado conceptual"
        },
        {
            question: "¿Qué herramienta se utiliza para representar gráficamente entidades y relaciones?",
            options: ["Mapa de red", "Modelo físico", "Esquema XML", "Diagrama Entidad-Relación"],
            correct: 3,
            explanation: "El Diagrama Entidad-Relación (E-R) es la herramienta principal para representar gráficamente entidades, atributos y relaciones.",
            topic: "Diagramas E-R"
        },
        {
            question: "¿Qué tipo de atributo puede dividirse en subatributos?",
            options: ["Multivaluado", "Derivado", "Simple", "Compuesto"],
            correct: 3,
            explanation: "Un atributo compuesto puede dividirse en subatributos (ej: dirección = calle + número + ciudad).",
            topic: "Tipos de atributos"
        },
        {
            question: "¿Qué representa una clave primaria?",
            options: ["Relación entre tablas", "Un tipo de dato de texto largo", "Identificador único de cada fila en una tabla", "Un campo opcional"],
            correct: 2,
            explanation: "La clave primaria es el identificador único de cada fila en una tabla, no puede repetirse ni ser nulo.",
            topic: "Claves"
        },
        {
            question: "¿Qué tipo de relación vincula a una entidad consigo misma?",
            options: ["Paralela", "Reflexiva", "Exclusiva", "Ternaria"],
            correct: 1,
            explanation: "Una relación reflexiva o recursiva vincula una entidad consigo misma (ej: empleado supervisa a empleado).",
            topic: "Tipos de relaciones"
        },
        {
            question: "¿Qué se crea al convertir una relación N:M en el modelo relacional?",
            options: ["Un atributo derivado", "Una clave primaria", "Una vista", "Una tabla intermedia"],
            correct: 3,
            explanation: "Las relaciones N:M se convierten en una tabla intermedia que contiene las claves primarias de ambas entidades.",
            topic: "Transformación E-R a relacional"
        },
        {
            question: "¿Qué indica la cardinalidad 1:N?",
            options: ["Ninguna relación posible", "Varias entidades se relacionan con varias", "Ambas entidades tienen una sola instancia", "Una instancia de una entidad se relaciona con muchas de otra"],
            correct: 3,
            explanation: "La cardinalidad 1:N indica que una instancia de una entidad se relaciona con muchas instancias de otra.",
            topic: "Cardinalidades"
        },
        {
            question: "¿Cuál es el resultado de aplicar la 1FN?",
            options: ["Creación de claves artificiales", "Eliminación de atributos multivaluados y compuestos", "Separación en tablas jerárquicas", "Separación de dependencias transitivas"],
            correct: 1,
            explanation: "La Primera Forma Normal (1FN) elimina atributos multivaluados y compuestos, dejando solo valores atómicos.",
            topic: "Normalización"
        },
        {
            question: "¿Qué caracteriza a una relación ternaria?",
            options: ["Aparece solo en 3FN", "No tiene atributos propios", "Involucra tres entidades", "Involucra una sola entidad"],
            correct: 2,
            explanation: "Una relación ternaria involucra tres entidades simultáneamente en la misma relación.",
            topic: "Tipos de relaciones"
        },
        {
            question: "¿Qué es una dependencia funcional?",
            options: ["Una clave ajena que apunta a otra tabla", "Una relación con cardinalidad 1:1", "Una entidad depende de otra", "Un atributo depende del valor de otro"],
            correct: 3,
            explanation: "Una dependencia funcional ocurre cuando el valor de un atributo determina unívocamente el valor de otro.",
            topic: "Dependencias funcionales"
        },
        {
            question: "¿Qué tipo de atributo puede tener varios valores?",
            options: ["Derivado", "Compuesto", "Multivaluado", "Simple"],
            correct: 2,
            explanation: "Un atributo multivaluado puede tener varios valores para una misma instancia (ej: teléfonos de una persona).",
            topic: "Tipos de atributos"
        },
        {
            question: "¿Qué modelo se usa para representar datos sin considerar un SGBD concreto?",
            options: ["Modelo externo", "Modelo lógico", "Modelo físico", "Modelo conceptual"],
            correct: 3,
            explanation: "El modelo conceptual representa los datos sin considerar ningún SGBD específico, es independiente de la implementación.",
            topic: "Niveles de modelado"
        },
        {
            question: "¿Qué forma normal elimina las dependencias parciales?",
            options: ["3FN", "BCNF", "1FN", "2FN"],
            correct: 3,
            explanation: "La Segunda Forma Normal (2FN) elimina las dependencias parciales de la clave primaria.",
            topic: "Normalización"
        },
        {
            question: "¿Qué tipo de especialización permite que una instancia pertenezca a varios subtipos?",
            options: ["Solapada", "Parcial", "Exclusiva", "Total"],
            correct: 0,
            explanation: "La especialización solapada permite que una instancia del supertipo pertenezca a varios subtipos simultáneamente.",
            topic: "Generalización/Especialización"
        },
        {
            question: "¿Qué notación utiliza óvalos, rectángulos y rombos?",
            options: ["Notación UML", "Notación Chen", "Notación EBNF", "Notación Crow's Foot"],
            correct: 1,
            explanation: "La notación Chen utiliza rectángulos para entidades, óvalos para atributos y rombos para relaciones.",
            topic: "Notaciones E-R"
        },
        {
            question: "¿Qué significa transformar una relación 1:N en el modelo relacional?",
            options: ["Dividir en varias tablas", "Agregar una clave foránea en la entidad del lado N", "Crear un índice cruzado", "Eliminar la relación"],
            correct: 1,
            explanation: "En una relación 1:N, se añade la clave primaria del lado 1 como clave foránea en la tabla del lado N.",
            topic: "Transformación E-R a relacional"
        },
        {
            question: "¿Qué atributo se calcula a partir de otros?",
            options: ["Simple", "Derivado", "Multivaluado", "Compuesto"],
            correct: 1,
            explanation: "Un atributo derivado se calcula a partir de otros atributos (ej: edad calculada desde fecha de nacimiento).",
            topic: "Tipos de atributos"
        },
        {
            question: "¿Qué se evita aplicando normalización?",
            options: ["Relaciones reflexivas", "Creación de vistas", "Redundancia de datos", "Errores de sintaxis SQL"],
            correct: 2,
            explanation: "La normalización evita la redundancia de datos y las anomalías de inserción, actualización y borrado.",
            topic: "Normalización"
        },
        {
            question: "¿Qué ocurre si no se define bien una clave foránea?",
            options: ["Se generan índices duplicados", "Puede romperse la integridad referencial", "No se puede usar SQL", "Se bloquea la base de datos"],
            correct: 1,
            explanation: "Una clave foránea mal definida puede romper la integridad referencial, permitiendo referencias a registros inexistentes.",
            topic: "Integridad referencial"
        },
        {
            question: "¿Qué herramienta formaliza jerarquías entre entidades?",
            options: ["Modelo relacional", "Modelo físico", "Modelo E/R ampliado", "Modelo dimensional"],
            correct: 2,
            explanation: "El modelo E/R ampliado (EER) incluye conceptos de generalización/especialización para formalizar jerarquías.",
            topic: "Modelo E-R extendido"
        }
    ],
    ut3: [
        {
            question: "¿Qué instrucción se usa para crear una base de datos en SQL?",
            options: ["INIT DATABASE", "NEW DATABASE", "CREATE DATABASE", "MAKE DATABASE"],
            correct: 2,
            explanation: "CREATE DATABASE es la sentencia DDL estándar para crear una nueva base de datos en SQL.",
            topic: "DDL - Bases de datos"
        },
        {
            question: "¿Cuál de las siguientes herramientas es una interfaz gráfica para MySQL?",
            options: ["Oracle CLI", "MySQL Workbench", "phpMyAdmin Console", "AdminTools"],
            correct: 1,
            explanation: "MySQL Workbench es la herramienta oficial de interfaz gráfica para administrar bases de datos MySQL.",
            topic: "Herramientas MySQL"
        },
        {
            question: "¿Qué tipo de restricción impide que un campo quede vacío?",
            options: ["UNIQUE", "NOT NULL", "DEFAULT", "PRIMARY"],
            correct: 1,
            explanation: "La restricción NOT NULL impide que se inserten valores nulos en una columna.",
            topic: "Restricciones"
        },
        {
            question: "¿Qué sentencia permite modificar la estructura de una tabla?",
            options: ["CHANGE TABLE", "ALTER TABLE", "UPDATE STRUCTURE", "MODIFY TABLE"],
            correct: 1,
            explanation: "ALTER TABLE es la sentencia DDL para modificar la estructura de una tabla existente.",
            topic: "DDL - Tablas"
        },
        {
            question: "¿Qué tipo de índice asegura que los valores no se repitan?",
            options: ["CHECK", "FOREIGN", "DEFAULT", "UNIQUE"],
            correct: 3,
            explanation: "Un índice UNIQUE garantiza que no haya valores duplicados en la columna o columnas indexadas.",
            topic: "Índices"
        },
        {
            question: "¿Cuál de los siguientes es un tipo de dato para texto de longitud variable?",
            options: ["CHAR", "VARCHAR", "TEXT", "STRING"],
            correct: 1,
            explanation: "VARCHAR almacena cadenas de texto de longitud variable, optimizando el espacio de almacenamiento.",
            topic: "Tipos de datos"
        },
        {
            question: "¿Qué sentencia permite eliminar una base de datos?",
            options: ["ERASE DATABASE", "REMOVE DATABASE", "DELETE DATABASE", "DROP DATABASE"],
            correct: 3,
            explanation: "DROP DATABASE es la sentencia DDL para eliminar permanentemente una base de datos.",
            topic: "DDL - Bases de datos"
        },
        {
            question: "¿Cuál de los siguientes asegura la relación entre tablas?",
            options: ["DEFAULT", "INDEX", "FOREIGN KEY", "UNIQUE"],
            correct: 2,
            explanation: "FOREIGN KEY (clave foránea) establece y mantiene la integridad referencial entre tablas.",
            topic: "Claves foráneas"
        },
        {
            question: "¿Qué restricción permite establecer un valor por defecto?",
            options: ["UNIQUE", "CHECK", "DEFAULT", "NOT NULL"],
            correct: 2,
            explanation: "La restricción DEFAULT establece un valor automático cuando no se especifica uno al insertar.",
            topic: "Restricciones"
        },
        {
            question: "¿Qué tipo de integridad garantiza que cada fila sea única y completa?",
            options: ["Integridad referencial", "Integridad de dominio", "Integridad de entidad", "Integridad lógica"],
            correct: 2,
            explanation: "La integridad de entidad garantiza que cada fila tenga una clave primaria única y no nula.",
            topic: "Integridad de datos"
        },
        {
            question: "¿Qué comando se usa para seleccionar una base de datos?",
            options: ["USE", "CHOOSE", "SELECT DATABASE", "OPEN"],
            correct: 0,
            explanation: "USE nombre_base_datos es el comando para seleccionar y trabajar con una base de datos específica.",
            topic: "Comandos MySQL"
        },
        {
            question: "¿Qué comando sirve para ver las bases de datos existentes?",
            options: ["SHOW DATABASES", "LIST DATABASES", "SHOW DB", "DISPLAY DB"],
            correct: 0,
            explanation: "SHOW DATABASES muestra la lista de todas las bases de datos disponibles en el servidor.",
            topic: "Comandos MySQL"
        },
        {
            question: "¿Qué tipo de índice permite acelerar búsquedas?",
            options: ["INDEX", "TABLE", "CONSTRAINT", "VIEW"],
            correct: 0,
            explanation: "INDEX crea una estructura de datos que acelera las búsquedas en las columnas indexadas.",
            topic: "Índices"
        },
        {
            question: "¿Cuál de las siguientes no es una sentencia DDL?",
            options: ["ALTER", "DROP", "CREATE", "SELECT"],
            correct: 3,
            explanation: "SELECT es una sentencia DML (Data Manipulation Language), no DDL. DDL incluye CREATE, ALTER, DROP.",
            topic: "Tipos de sentencias SQL"
        },
        {
            question: "¿Qué tipo de clave identifica unívocamente cada fila?",
            options: ["FOREIGN KEY", "PRIMARY KEY", "UNIQUE", "INDEX"],
            correct: 1,
            explanation: "PRIMARY KEY es la clave primaria que identifica de forma única cada registro en una tabla.",
            topic: "Claves primarias"
        },
        {
            question: "¿Qué tipo de dato se usa para almacenar fechas?",
            options: ["TEXT", "VARCHAR", "DATE", "CHAR"],
            correct: 2,
            explanation: "DATE es el tipo de dato específico para almacenar fechas en formato YYYY-MM-DD.",
            topic: "Tipos de datos"
        },
        {
            question: "¿Qué tipo de integridad controla los valores permitidos en una columna?",
            options: ["Integridad referencial", "Integridad externa", "Integridad compuesta", "Integridad de dominio"],
            correct: 3,
            explanation: "La integridad de dominio controla que los valores de una columna estén dentro del rango permitido.",
            topic: "Integridad de datos"
        },
        {
            question: "¿Cuál es una herramienta de consola para trabajar con MySQL?",
            options: ["SQL Studio", "Cliente de línea de comandos", "Shell Admin", "Workbench"],
            correct: 1,
            explanation: "El cliente de línea de comandos (mysql) permite interactuar con MySQL desde la terminal.",
            topic: "Herramientas MySQL"
        },
        {
            question: "¿Cuál es la mejor práctica al nombrar campos en SQL?",
            options: ["Usar nombres claros y sin espacios", "Incluir caracteres especiales", "Escribir en mayúsculas", "Utilizar nombres genéricos"],
            correct: 0,
            explanation: "Se recomienda usar nombres descriptivos, sin espacios, preferiblemente en snake_case o camelCase.",
            topic: "Buenas prácticas"
        },
        {
            question: "¿Qué comando permite crear una tabla nueva?",
            options: ["NEW TABLE", "INIT TABLE", "BUILD TABLE", "CREATE TABLE"],
            correct: 3,
            explanation: "CREATE TABLE es la sentencia DDL para crear una nueva tabla con su estructura.",
            topic: "DDL - Tablas"
        }
    ],
    ut4: [
        {
            question: "¿Qué cláusula SQL se utiliza para filtrar filas según condiciones específicas?",
            options: ["WHERE", "SELECT", "HAVING", "ORDER BY"],
            correct: 0,
            explanation: "La cláusula WHERE filtra las filas que cumplen las condiciones especificadas antes de cualquier agrupación.",
            topic: "Consultas básicas"
        },
        {
            question: "¿Qué función SQL se usa para contar el número de registros de una consulta?",
            options: ["COUNT", "SUM", "AVG", "TOTAL"],
            correct: 0,
            explanation: "COUNT() cuenta el número de filas o valores no nulos en una columna.",
            topic: "Funciones de agregación"
        },
        {
            question: "¿Qué tipo de JOIN devuelve solo los registros con coincidencias en ambas tablas?",
            options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
            correct: 0,
            explanation: "INNER JOIN devuelve solo las filas donde existe coincidencia en ambas tablas.",
            topic: "Tipos de JOIN"
        },
        {
            question: "¿Qué cláusula se emplea para ordenar los resultados de una consulta?",
            options: ["LIMIT", "HAVING", "ORDER BY", "GROUP BY"],
            correct: 2,
            explanation: "ORDER BY ordena los resultados de forma ascendente (ASC) o descendente (DESC).",
            topic: "Ordenación"
        },
        {
            question: "¿Qué operador se usa para comprobar si un valor está incluido en una lista?",
            options: ["EXISTS", "BETWEEN", "ANY", "IN"],
            correct: 3,
            explanation: "El operador IN verifica si un valor está dentro de una lista de valores especificados.",
            topic: "Operadores"
        },
        {
            question: "¿Qué cláusula permite agrupar resultados por valores comunes?",
            options: ["SELECT", "AS", "ORDER BY", "GROUP BY"],
            correct: 3,
            explanation: "GROUP BY agrupa filas con valores idénticos en las columnas especificadas.",
            topic: "Agrupación"
        },
        {
            question: "¿Qué palabra clave permite eliminar una vista?",
            options: ["DELETE VIEW", "DROP VIEW", "REMOVE VIEW", "ERASE VIEW"],
            correct: 1,
            explanation: "DROP VIEW es la sentencia para eliminar una vista de la base de datos.",
            topic: "Vistas"
        },
        {
            question: "¿Cuál es la función que permite calcular el promedio de una columna numérica?",
            options: ["SUM", "AVG", "MEAN", "TOTAL"],
            correct: 1,
            explanation: "AVG() calcula el promedio (media aritmética) de los valores de una columna numérica.",
            topic: "Funciones de agregación"
        },
        {
            question: "¿Qué cláusula se usa para filtrar después de una agregación con GROUP BY?",
            options: ["ORDER BY", "HAVING", "FILTER", "WHERE"],
            correct: 1,
            explanation: "HAVING filtra los grupos después de aplicar GROUP BY y funciones de agregación.",
            topic: "Filtrado de grupos"
        },
        {
            question: "¿Qué tipo de subconsulta utiliza columnas de la consulta externa?",
            options: ["Anidada", "Autónoma", "Correlacionada", "Independiente"],
            correct: 2,
            explanation: "Una subconsulta correlacionada hace referencia a columnas de la consulta externa.",
            topic: "Subconsultas"
        },
        {
            question: "¿Qué palabra clave se utiliza para asignar un alias a una columna o tabla?",
            options: ["NAME", "LIKE", "AS", "ALIAS"],
            correct: 2,
            explanation: "AS se utiliza para asignar un alias temporal a columnas o tablas en una consulta.",
            topic: "Alias"
        },
        {
            question: "¿Qué operador se utiliza para comparar una columna con un patrón de texto?",
            options: ["LIKE", "EQUALS", "INCLUDES", "MATCH"],
            correct: 0,
            explanation: "LIKE permite búsquedas con patrones usando comodines (% y _).",
            topic: "Operadores de texto"
        },
        {
            question: "¿Qué tipo de JOIN incluye todos los registros de la tabla izquierda?",
            options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "RIGHT JOIN"],
            correct: 1,
            explanation: "LEFT JOIN incluye todos los registros de la tabla izquierda, aunque no tengan coincidencia en la derecha.",
            topic: "Tipos de JOIN"
        },
        {
            question: "¿Qué operador se usa para comprobar si una subconsulta devuelve al menos un resultado?",
            options: ["IN", "CHECK", "ANY", "EXISTS"],
            correct: 3,
            explanation: "EXISTS devuelve verdadero si la subconsulta retorna al menos una fila.",
            topic: "Subconsultas"
        },
        {
            question: "¿Qué palabra clave se usa para crear una vista en SQL?",
            options: ["NEW VIEW", "CREATE VIEW", "DEFINE VIEW", "MAKE VIEW"],
            correct: 1,
            explanation: "CREATE VIEW es la sentencia para crear una nueva vista basada en una consulta SELECT.",
            topic: "Vistas"
        },
        {
            question: "¿Qué función convierte texto a mayúsculas en SQL?",
            options: ["TO_UPPER", "CAPITALIZE", "UPPER", "CAPS"],
            correct: 2,
            explanation: "UPPER() convierte una cadena de texto a mayúsculas.",
            topic: "Funciones de texto"
        },
        {
            question: "¿Qué operador permite seleccionar registros dentro de un rango de valores?",
            options: ["LIMIT", "RANGE", "BETWEEN", "COMPARE"],
            correct: 2,
            explanation: "BETWEEN selecciona valores dentro de un rango inclusivo (valor1 AND valor2).",
            topic: "Operadores de rango"
        },
        {
            question: "¿Qué tipo de función se aplica a cada fila de forma individual?",
            options: ["Agregada", "Global", "Analítica", "Escalar"],
            correct: 3,
            explanation: "Las funciones escalares operan sobre valores individuales y devuelven un único valor por fila.",
            topic: "Tipos de funciones"
        },
        {
            question: "¿Qué palabra clave permite mostrar solo valores únicos en los resultados?",
            options: ["ONLY", "SEPARATE", "DISTINCT", "UNIQUE"],
            correct: 2,
            explanation: "DISTINCT elimina filas duplicadas del conjunto de resultados.",
            topic: "Eliminación de duplicados"
        },
        {
            question: "¿Qué cláusula permite aplicar funciones de ventana como AVG sin agrupar?",
            options: ["WINDOW", "RANK", "OVER", "PARTITION"],
            correct: 2,
            explanation: "OVER define una ventana sobre la cual se aplican funciones analíticas sin necesidad de GROUP BY.",
            topic: "Funciones de ventana"
        }
    ],
    ut5: [
        {
            question: "¿Qué comando impide temporalmente el acceso a una tabla por parte de otras transacciones?",
            options: ["LOCK TABLE", "DENY", "ISOLATE", "RESTRICT"],
            correct: 0,
            explanation: "LOCK TABLE se utiliza para bloquear una tabla completa, controlando el acceso concurrente durante una transacción.",
            topic: "Control de Concurrencia"
        },
        {
            question: "¿Qué sentencia DML permite insertar nuevos registros en una tabla?",
            options: ["DELETE", "INSERT", "SELECT", "UPDATE"],
            correct: 1,
            explanation: "INSERT es la sentencia del Lenguaje de Manipulación de Datos (DML) utilizada para añadir nuevas filas.",
            topic: "DML"
        },
        {
            question: "¿Qué motor de almacenamiento en MySQL soporta transacciones?",
            options: ["MyISAM", "Memory", "InnoDB", "Aria"],
            correct: 2,
            explanation: "InnoDB es el motor de almacenamiento predeterminado en MySQL que ofrece soporte para transacciones ACID y claves foráneas.",
            topic: "Motores de Almacenamiento"
        },
        {
            question: "¿Cómo se denomina el fenómeno en el que dos transacciones se bloquean mutuamente?",
            options: ["Conflicto cruzado", "Interbloqueo", "Sobrecarga", "Inconsistencia"],
            correct: 1,
            explanation: "Un interbloqueo (deadlock) ocurre cuando dos o más procesos esperan por recursos que el otro tiene bloqueados permanentemente.",
            topic: "Concurrencia"
        },
        {
            question: "¿Qué sentencia elimina datos de una tabla sin afectar su estructura?",
            options: ["DELETE", "TRUNCATE", "DROP", "ALTER"],
            correct: 0,
            explanation: "DELETE permite borrar filas de una tabla basándose en una condición, manteniendo la estructura de la tabla intacta.",
            topic: "DML"
        },
        {
            question: "¿Qué nivel de aislamiento evita lecturas sucias, no repetibles y fantasmas?",
            options: ["REPEATABLE READ", "READ COMMITTED", "SERIALIZABLE", "READ UNCOMMITTED"],
            correct: 2,
            explanation: "SERIALIZABLE es el nivel de aislamiento más alto; asegura que el resultado de ejecuciones concurrentes sea igual a una ejecución secuencial.",
            topic: "Aislamiento de Transacciones"
        },
        {
            question: "¿Qué tipo de bloqueo permite solo lectura simultánea por varias transacciones?",
            options: ["Exclusivo", "Compartido", "General", "Temporal"],
            correct: 1,
            explanation: "Un bloqueo compartido (Shared lock) permite que múltiples transacciones lean un recurso pero impide que lo modifiquen.",
            topic: "Bloqueos"
        },
        {
            question: "¿Qué comando inicia una transacción en SQL?",
            options: ["BEGIN", "OPEN", "INIT", "START SESSION"],
            correct: 0,
            explanation: "BEGIN (o START TRANSACTION) marca el punto de inicio de una unidad de trabajo lógica que debe cumplirse íntegramente.",
            topic: "Transacciones"
        },
        {
            question: "¿Qué propiedad ACID garantiza que los cambios confirmados no se pierdan?",
            options: ["Durabilidad", "Consistencia", "Integridad", "Aislamiento"],
            correct: 0,
            explanation: "La durabilidad garantiza que una vez que la transacción se ha confirmado (commit), los cambios persistirán incluso ante fallos del sistema.",
            topic: "ACID"
        },
        {
            question: "¿Qué propiedad ACID evita que los cambios de una transacción sean visibles antes de finalizarse?",
            options: ["Consistencia", "Atomicidad", "Durabilidad", "Aislamiento"],
            correct: 3,
            explanation: "El aislamiento asegura que las operaciones de una transacción sean invisibles para otras hasta que se complete la transacción.",
            topic: "ACID"
        },
        {
            question: "¿Qué tipo de problema ocurre cuando una transacción lee datos no confirmados por otra?",
            options: ["Lectura fantasma", "Lectura comprometida", "Lectura sucia", "Lectura retrasada"],
            correct: 2,
            explanation: "Una lectura sucia (dirty read) sucede cuando una transacción lee datos que han sido modificados por otra transacción que aún no ha hecho commit.",
            topic: "Concurrencia"
        },
        {
            question: "¿Qué palabra clave se emplea para deshacer una transacción en curso?",
            options: ["ROLLBACK", "COMMIT", "UNDO", "CANCEL"],
            correct: 0,
            explanation: "ROLLBACK revierte todos los cambios realizados durante la transacción actual, devolviendo la base de datos a su estado anterior.",
            topic: "Transacciones"
        },
        {
            question: "¿Cuál es la propiedad ACID que garantiza que una transacción se ejecuta completamente o no se ejecuta?",
            options: ["Durabilidad", "Atomicidad", "Aislamiento", "Consistencia"],
            correct: 1,
            explanation: "La atomicidad trata la transacción como una unidad atómica 'todo o nada'; si falla una parte, falla toda la transacción.",
            topic: "ACID"
        },
        {
            question: "¿Qué propiedad ACID asegura que la base de datos pase de un estado válido a otro también válido?",
            options: ["Consistencia", "Aislamiento", "Durabilidad", "Atomicidad"],
            correct: 0,
            explanation: "La consistencia garantiza que cualquier transacción llevará a la base de datos de un estado válido a otro que siga todas las reglas de integridad.",
            topic: "ACID"
        },
        {
            question: "¿Cuál es el comando SQL para modificar registros existentes?",
            options: ["INSERT", "ALTER", "DELETE", "UPDATE"],
            correct: 3,
            explanation: "UPDATE se utiliza para modificar los valores de las columnas de una o varias filas ya existentes en una tabla.",
            topic: "DML"
        },
        {
            question: "¿Qué cláusula SQL define el comportamiento al eliminar registros relacionados con una clave foránea?",
            options: ["ON SELECT", "ON INSERT", "ON ROLLBACK", "ON DELETE"],
            correct: 3,
            explanation: "La cláusula ON DELETE define acciones automáticas (como CASCADE o SET NULL) cuando se borra una fila referenciada por una clave ajena.",
            topic: "Integridad Referencial"
        },
        {
            question: "¿Qué palabra clave en SQL se utiliza para confirmar una transacción?",
            options: ["START", "ROLLBACK", "SAVEPOINT", "COMMIT"],
            correct: 3,
            explanation: "COMMIT guarda de forma permanente todos los cambios realizados durante la transacción actual.",
            topic: "Transacciones"
        },
        {
            question: "¿Qué tipo de bloqueo impide cualquier otra lectura o escritura en el dato bloqueado?",
            options: ["Exclusivo", "Relacional", "Compartido", "Condicional"],
            correct: 0,
            explanation: "Un bloqueo exclusivo (Exclusive lock o X-lock) otorga acceso total para modificar un dato e impide que otros lo lean o modifiquen.",
            topic: "Bloqueos"
        },
        {
            question: "¿Qué comando se usa para revertir una parte concreta de una transacción?",
            options: ["UNDO", "ROLLBACK TO SAVEPOINT", "REVERT", "BACK"],
            correct: 1,
            explanation: "ROLLBACK TO SAVEPOINT permite deshacer los cambios solo hasta un punto de control marcado previamente dentro de la misma transacción.",
            topic: "Transacciones"
        },
        {
            question: "¿Qué tipo de clave relaciona registros entre dos tablas distintas?",
            options: ["Clave primaria", "Clave secundaria", "Clave foránea", "Clave única"],
            correct: 2,
            explanation: "Una clave foránea (foreign key) es una columna o conjunto de columnas que establece un vínculo entre los datos de dos tablas.",
            topic: "Integridad Referencial"
        }
    ],
    ut6: [
        {
            question: "¿Qué formato se caracteriza por separar datos con comas y tener estructura tabular?",
            options: ["JSON", "SQL", "CSV", "XML"],
            correct: 2,
            explanation: "El formato CSV (Comma Separated Values) utiliza comas para delimitar campos y saltos de línea para registros, ideal para estructuras tabulares.",
            topic: "Formatos de intercambio"
        },
        {
            question: "¿Cuál de los siguientes es un componente necesario en una política de respaldo?",
            options: ["Frecuencia, responsables y procedimientos", "Diagrama E/R y análisis funcional", "Clave foránea y consultas SQL", "Índices, normalización y claves"],
            correct: 0,
            explanation: "Una política de respaldo debe definir cuándo se hace (frecuencia), quién lo hace (responsables) y cómo se hace (procedimientos).",
            topic: "Estrategias de respaldo"
        },
        {
            question: "¿Cuál es el objetivo principal de una estrategia de respaldo?",
            options: ["Garantizar la disponibilidad y recuperación de los datos", "Crear usuarios nuevos", "Aumentar el rendimiento de las consultas", "Disminuir el tamaño de las bases de datos"],
            correct: 0,
            explanation: "El respaldo busca asegurar que, ante un fallo, los datos puedan recuperarse y estar disponibles en el menor tiempo posible.",
            topic: "Estrategias de respaldo"
        },
        {
            question: "¿Qué concepto define la cantidad máxima de datos que pueden perderse tras un fallo?",
            options: ["PITR", "RTO", "RPO", "ROI"],
            correct: 2,
            explanation: "El RPO (Recovery Point Objective) mide la pérdida de datos tolerable medida en tiempo (ej: perder máximo 15 minutos de datos).",
            topic: "Recuperación"
        },
        {
            question: "¿Cuál de los siguientes formatos permite representar datos jerárquicos con etiquetas?",
            options: ["XML", "TXT", "SQL", "CSV"],
            correct: 0,
            explanation: "XML utiliza una estructura de etiquetas anidadas que permite representar jerarquías de datos complejas.",
            topic: "Formatos de intercambio"
        },
        {
            question: "¿Qué principio recomienda tener al menos una copia fuera del entorno habitual?",
            options: ["Full-Diff", "ACID", "3-2-1", "RAID 1"],
            correct: 2,
            explanation: "La regla 3-2-1 sugiere 3 copias, en 2 soportes diferentes, y 1 de ellas fuera de la ubicación física principal.",
            topic: "Estrategias de respaldo"
        },
        {
            question: "¿Qué comando se usa para exportar una base de datos completa en MySQL desde terminal?",
            options: ["mysqldump", "dumpall", "mysqlimport", "pgdump"],
            correct: 0,
            explanation: "mysqldump es la herramienta de línea de comandos estándar de MySQL para realizar volcados (dumps) de bases de datos.",
            topic: "Herramientas MySQL"
        },
        {
            question: "¿Qué comando permite recuperar una base de datos desde un archivo .sql en MySQL?",
            options: ["pg_restore archivo.sql", "mysqlimport archivo.sql", "mysql < archivo.sql", "mysqldump < archivo.sql"],
            correct: 2,
            explanation: "Para restaurar un script SQL se utiliza el cliente 'mysql' redirigiendo la entrada del archivo hacia el motor de la base de datos.",
            topic: "Herramientas MySQL"
        },
        {
            question: "¿Qué característica tiene una copia diferencial respecto a la incremental?",
            options: ["No guarda cambios, solo estructura", "Solo guarda los cambios desde la última copia incremental", "Se hace en paralelo con cada consulta SELECT", "Acumula todos los cambios desde la última copia completa"],
            correct: 3,
            explanation: "La copia diferencial guarda todos los cambios realizados desde el último backup completo, por lo que crece con el tiempo hasta el siguiente backup completo.",
            topic: "Tipos de backup"
        },
        {
            question: "¿Qué herramienta permite migrar una base de datos desde Oracle a PostgreSQL?",
            options: ["Workbench", "SSMA", "pgLoader", "pgSQL Viewer"],
            correct: 2,
            explanation: "pgLoader es una herramienta popular para migrar datos a PostgreSQL desde diversos motores como Oracle o MySQL.",
            topic: "Migración"
        },
        {
            question: "¿Qué tipo de validación consiste en restaurar una copia en un entorno de pruebas?",
            options: ["Backup en caliente", "Comprobación binaria", "Restauración de prueba", "Restauración paralela"],
            correct: 2,
            explanation: "La única forma real de asegurar que un backup funciona es realizar una restauración de prueba completa.",
            topic: "Mantenimiento"
        },
        {
            question: "¿Qué tipo de copia se considera más rápida en tiempo de ejecución y requiere menos espacio?",
            options: ["Copia completa", "Copia espejo", "Copia incremental", "Copia diferencial completa"],
            correct: 2,
            explanation: "La copia incremental solo guarda los cambios realizados desde el último backup (ya sea completo o incremental), siendo la más eficiente en espacio.",
            topic: "Tipos de backup"
        },
        {
            question: "¿Qué herramienta permite importar datos a una tabla en MySQL desde un archivo CSV?",
            options: ["restorecli", "mysqldump", "sqlimport", "mysqlimport"],
            correct: 3,
            explanation: "mysqlimport es el cliente de línea de comandos diseñado específicamente para cargar archivos de texto (como CSV) en tablas de MySQL.",
            topic: "Herramientas MySQL"
        },
        {
            question: "¿Qué herramienta permite automatizar copias de seguridad mediante programación en Linux?",
            options: ["taskmgr", "phpBackup", "cron", "rsyncgui"],
            correct: 2,
            explanation: "Cron es el administrador de procesos en segundo plano de Linux que permite programar tareas (scripts de backup) en intervalos regulares.",
            topic: "Automatización"
        },
        {
            question: "¿Qué utilidad permite trabajar con MySQL desde una interfaz web en el navegador?",
            options: ["SQL Server Agent", "SQLite CLI", "MySQL Workbench", "phpMyAdmin"],
            correct: 3,
            explanation: "phpMyAdmin es una de las herramientas web más extendidas para gestionar bases de datos MySQL a través de un navegador.",
            topic: "Herramientas"
        },
        {
            question: "¿Qué extensión suele tener un archivo de copia de seguridad en SQL Server?",
            options: [".bak", ".db", ".csv", ".dat"],
            correct: 0,
            explanation: "Los archivos de backup generados por SQL Server utilizan tradicionalmente la extensión .bak.",
            topic: "Administración"
        },
        {
            question: "¿Qué valor mide el tiempo máximo que puede tardarse en restaurar un sistema?",
            options: ["SLA", "RPO", "RTO", "PITR"],
            correct: 2,
            explanation: "El RTO (Recovery Time Objective) es el tiempo máximo permitido para restaurar el servicio tras una caída.",
            topic: "Recuperación"
        },
        {
            question: "¿Qué herramienta gráfica oficial permite realizar copias y restauraciones en MySQL?",
            options: ["Access", "SSMS", "DBeaver Lite", "MySQL Workbench"],
            correct: 3,
            explanation: "MySQL Workbench es la herramienta oficial de Oracle que incluye utilidades gráficas para exportar e importar datos.",
            topic: "Herramientas MySQL"
        },
        {
            question: "¿Qué herramienta permite gestionar conexiones remotas, modelado E/R y backups en MySQL?",
            options: ["SQLiteStudio", "phpMyAdmin", "Oracle VM", "MySQL Workbench"],
            correct: 3,
            explanation: "MySQL Workbench es una herramienta integral que cubre desde el diseño físico hasta la administración y respaldos.",
            topic: "Herramientas MySQL"
        },
        {
            question: "¿Qué tipo de restauración requiere aplicar la copia completa y todas las incrementales?",
            options: ["Restauración incremental", "Restauración simple", "Restauración parcial", "Restauración diferencial"],
            correct: 0,
            explanation: "Para recuperar un sistema con backups incrementales, se debe restaurar el último completo y, en orden, cada uno de los incrementales generados.",
            topic: "Recuperación"
        }
    ]

};