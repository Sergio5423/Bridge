# Patrón de Diseño: Bridge (Puente)

## ¿Qué es el Patrón Bridge?

El **Bridge** es un patrón de diseño **estructural** que te permite dividir una clase grande, o un grupo de clases estrechamente relacionadas, en dos jerarquías separadas —**Abstracción** e **Implementación**— que pueden desarrollarse de forma totalmente independiente la una de la otra.

---

## Propósito y Problema que Resuelve

* **Problema:** Cuando una aplicación necesita extenderse o variar en múltiples dimensiones ortogonales (por ejemplo, tipos de *Dispositivos* combinados con tipos de *Controles Remotos*, o formas combinadas con colores), la solución basada puramente en herencia (`extends`) genera una **explosión combinatoria de clases**. Esto incrementa drásticamente la cantidad de archivos y crea un código altamente rígido y duplicado.
* **Propósito:** Sustituir la herencia por la **composición de objetos**, construyendo un "puente" (una referencia) entre la abstracción y la implementación. De este modo, ambas jerarquías pueden evolucionar, escalarse y modificarse de forma independiente.

---

## Aplicabilidad (Basada en Refactoring.Guru)

De acuerdo con las guías oficiales de diseño, debes considerar el uso del patrón Bridge en los siguientes escenarios:

1. **Evitar un enlace permanente entre abstracción e implementación:** Útil cuando necesitas dividir o aislar una clase monolítica que presenta múltiples variantes de una misma funcionalidad (por ejemplo, cuando una clase puede soportar múltiples variantes de GUI o varias bases de datos/APIs).
2. **Crecimiento independiente de clases en múltiples dimensiones:** Cuando una clase necesita extenderse en varias direcciones ortogonales (ej. dominio/infraestructura, front-end/back-end, o abstracción/plataforma) sin que las modificaciones en una dimensión afecten a la otra.
3. **Cambio de implementaciones en tiempo de ejecución:** Cuando requieres la capacidad de intercambiar el objeto de implementación dentro de la abstracción de forma dinámica (por ejemplo, reasignando un nuevo valor a la referencia del puente durante la ejecución del programa).
4. **Diseño multiplataforma:** Es sumamente útil en aplicaciones que deben soportar múltiples entornos o sistemas operativos (como Windows, Linux, macOS o dispositivos móviles) de forma transparente para el código cliente.

---

## Comparativa Teórica: Antes vs. Después

### 1. El "Antes": Deuda Técnica y Herencia Rígida

* **Funcionamiento:** Las características de control y los componentes físicos se mezclan mediante una jerarquía de herencia vertical y multinivel (`extends`).
* **Consecuencias:**
* Acoplamiento fuerte entre clases.
* Multiplicación exponencial de clases ante cualquier mínima variante ($N \times M$).
* Duplicación masiva de lógica de negocio y métodos compartidos.



### 2. El "Después": Implementación Limpia con el Patrón Bridge

* **Funcionamiento:** Se separa el sistema en dos jerarquías independientes conectadas por un puente compositivo:
1. **La Implementación (`Device` / Interfaz):** Define los comportamientos base y estados internos de bajo nivel.
2. **La Abstracción (`RemoteControl` / Clases base y refinadas):** Administra la lógica de control de alto nivel de cara al usuario y delega las tareas técnicas a través de la referencia del puente.
3. **npm install -D tsx typescript**
4. **Ejecutar con npx tsx despues.ts**

* **Ventajas:**
* Se elimina por completo la explosión de clases.
* Permite añadir nuevos dispositivos o mandos avanzados sin modificar el código preexistente.

![[Pasted image 20261013154328.png]]
https://refactoring.guru/es/design-patterns/bridge

---

## Otros Puntos Importantes a Considerar

* **Principio de Responsabilidad Única (SRP):** Permite que la abstracción se concentre exclusivamente en la lógica de alto nivel, mientras que la implementación se encarga únicamente de los detalles específicos de plataforma o infraestructura.
* **Principio de Abierto/Cerrado (OCP):** Puedes introducir nuevas abstracciones e implementaciones de manera independiente sin alterar las piezas ya probadas del sistema.
* **Posible Aumento de Complejidad:** Aplicar este patrón en clases que son originalmente simples y muy cohesivas puede añadir una capa innecesaria de abstracción e indirección, por lo que debe evaluarse cuando realmente existan dimensiones de cambio claras.