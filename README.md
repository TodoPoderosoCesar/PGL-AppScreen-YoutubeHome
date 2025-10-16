#  YOUTUBE HOME

Este proyecto es el calcado de una imagen referente a la aplicacion de movil de Youtube.
Esta compuesto por varios componentes y su similitud es amplia a pesar de necesitar muchos retoques finales.

---

## COMPARACION DEL PROYECTO CON LA APP:

Para empezar las primeras diferencias y mas notables son las fuentes usadas, las fuentes usadas no son
las fuentes corporativas de Youtube. Junto a las fuentes, los iconos. Los iconos usados no son fieles
a la imagen prestada para el desarrollo del proyecto. Estos iconos fueron sacados de ionIcons.

Por otro lado, ya entrando en mas detalle de lo principal, los videos desplegados son siempre el mismo
y la foto del creador de contenido no es una foto sino un icono que da el "pego".

A pesar de haber usado fotos personales y demás considero que la apariencia es lo mas parecido que he podido.

Por otro lado el apartado de los shorts se me quedó grande. No muestran indormacion por encima de la imagen
dando datos del short, y una vez mas las imagenes usadas son otras.

Por ultimo, el tabBar o el menú de abajo del todo no está bien centrado y los iconos usados no son
los mismo que los de la app.

Clica [aquí](./docs/10_youtube_home.jpeg) si quieres ver la captura de la APP proporcionada por el profesor.
Clica [aquí](./docs/imagenPro.png) si quieres ver la captura del proyecto.

##  Menú de Componentes

Haz clic en el nombre de la clase para ver más detalles:

- [HeaderNav.tsx](./components/HeaderNav.tsx) - Esta fichero carga un componente headernav que es el scroll horizontal debajo del header.
- [Short.tsx](./components/Short.tsx) - Este fichero carga un scroll horizontal con una imagen.
- [TabBar.tsx](./components/TabBar.txt) - Este fichero carga el componente entero dentro del footer.
- [Video.tsx](./components/Video.txt) - Este fichero crea el componente video.

---

## Autocrítica

Considero que muchos componentes se pueden hacer de maneras mas optimizadas y mejor en general, por ejemplo tabbar en vez de ser un componente que repito 5 veces, es un componente estatico. Otro ejemplo seria en el mismo fichero app.tsx en el header hay mucha informacion que cargo que podria simplificar metiendo en otro fichero y cargandolo en el app.tsx.
Considero por otro lado que en cuanto a lo visual se llega a asemejar bastante al resultado esperado pero le hace falta de más tiempo y cariño.