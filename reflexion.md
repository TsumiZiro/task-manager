1. ¿Cuál es la función de Node.js en este proyecto?
   ##Node sirve para guardas nuestras intruciones ademas de ser la Raiz del proyecto guardando datos clave del proyecto##

2. ¿Qué errores ayuda a detectar TypeScript antes de ejecutar la aplicación?
   ##Errores de escritura y logica o en la depuracion##

3. ¿Por qué se separaron models, data, services y utils?

##Ya que asi se separa responsabilidades ademas de facilitar el mantenimiento##

4. ¿Qué diferencia existe entre una función síncrona y una función async?
   ##La funcion sincronica ejecuta el programa paso a paso, Mientras quee la funsion async ejecuta tareas en segundo plano sin detener el flujo principal##

5. ¿Por qué findTaskById devuelve Task | undefined?
   ##Debido a que se acepta de que exista que la tarea no exista##

6. ¿Qué ventaja aporta leer APP_NAME desde process.env?
   ##La ventaja es la separacion de la configuracion y del codigo##

7. ¿Qué diferencia observó entre pnpm start y la secuencia pnpm build + pnpm serve?
   ##pnpm bulid + serve uso la dependencia tsc ademas de arrancar el progama.##
   ##pnpm arranca todo el programa de corrido##
   ##La diferencia entre ambos que para ejecutar el programa usandoo "build" y "serve" entra en modo "Testeo"##

8. ¿Qué parte de este proyecto podrá reutilizarse cuando se construya la API con Express?
   ##Yo diria que la parte de "SRC/" ##
