import React, { FC } from 'react'
import Accordion from '../../components/Accordion'
import Paragraph from '../../components/Paragraph'
import Subtitle from '../../components/Subtitle'
import Text from '../../components/Text'
import { BaseProps } from '../../models'

export type Props = BaseProps

const Cookies: FC<Props> = ({ isHidden }) => {
  if (isHidden) return null

  return (
    <div style={{ display: 'flex', flexFlow: 'row wrap', fontSize: '0.9rem' }}>
      <Subtitle small styles={{ marginBottom: 8 }}>Política de cookies</Subtitle>
      <Text size="xs" isStreched>Maisha Roots Spain utiliza cookies para proporcionar un uso personalizado al usuario de la Web.</Text>
      <Accordion title="¿Qué es una cookie?">
        <Text size="xs">
          El tratamiento de tus datos se realiza para el cumplimiento de obligaciones legales por parte de Maisha Roots Spain:
        </Text>
        <Paragraph size="xs">
          Una cookie es un fichero que se descarga en el ordenador/smartphone/tablet del usuario al acceder a determinadas páginas Web, para almacenar y recuperar información sobre la navegación que se efectúa desde dicho equipo.
          <br />
          El navegador del usuario utiliza la información sobre la visita a la Web para personalizar ciertas páginas o elementos. A efectos de análisis estadísticos, también puede utilizarse una cookie para transmitir a nuestro servidor un número único y anónimo generado al azar. No es posible identificar al usuario mediante una cookie. Generalmente, una cookie contiene el nombre del dominio de donde procede la misma, su &quot;tiempo de vida&quot; y un valor, que suele ser un valor de texto o un número único generado al azar.
        </Paragraph>
      </Accordion>
      <Accordion title="¿Qué tipos de cookies hay?">
        <Text size="s" weight="bold" isStreched>Según su origen:</Text>
        <ul>
          <li><Text weight="semibold" size="xs">Propias: </Text>
            son las cookies generadas por la propia página Web que se está visitando.
          </li>
          <li><Text weight="semibold" size="xs">De terceros: </Text>
            Son cookies que se reciben al navegar por una página Web, pero no son generadas por el titular de la Web, sino por otra entidad que trata los datos obtenidos a través de las cookies. Dentro de esta categoría se incluyen las cookies analíticas y las usadas por complementos externos de contenido, las cuales son necesarias para que el usuario pueda acceder a contenidos o servicios proporcionados por terceros proveedores como, por ejemplo, ubicaciones geográficas en Google Maps.
          </li>
        </ul>
        <Text size="xs" styles={{ marginBottom: 24 }} isStreched>
          En el caso de que las cookies sean instaladas desde un equipo o dominio gestionado por el propio editor pero la información que se recoja mediante estas sea gestionada por un tercero, no pueden ser consideradas como cookies propias.
        </Text>
        <Text size="s" weight="bold" isStreched>Según el tiempo que permanecen activas:</Text>
        <ul style={{ marginBottom: 24 }}>
          <li><Text weight="semibold" size="xs">Cookies de sesión: </Text>
            Son un tipo de cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página Web. No quedan registradas en el terminal del usuario cuando éste abandona la página Web.
          </li>
          <li><Text weight="semibold" size="xs">Cookies persistentes: </Text>
            Son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.
          </li>
        </ul>
        <Text size="s" weight="bold" isStreched>Según su finalidad:</Text>
        <ul>
          <li><Text weight="semibold" size="xs">Cookies Técnicas: </Text>
            Son las cookies estrictamente necesarias para la prestación de determinados servicios solicitados expresamente por el usuario. Si se desactivan estas cookies, no podrá recibir correctamente los contenidos y servicios ofrecidos en nuestra Web.
          </li>
          <li><Text weight="semibold" size="xs">Cookies Analíticas: </Text>
            Son aquellas que permiten el seguimiento y análisis estadístico del comportamiento del conjunto de los usuarios en nuestra Web, reuniendo y proporcionando información anónima. Esta información nos ayuda a mejorar el funcionamiento de la misma.
          </li>
          <li><Text weight="semibold" size="xs">Cookies Publicitarias: </Text>
            Son las cookies que permiten la gestión de los espacios publicitarios en base a criterios como la frecuencia en la que se muestran los anuncios.
          </li>
          <li><Text weight="semibold" size="xs">Cookies Comportamentales: </Text>
            Permiten la gestión de los espacios publicitarios según el perfil específico del usuario.
          </li>
        </ul>
      </Accordion>
      <Accordion title="¿Qué tipos de cookies utiliza Maisha Roots Spain?">
        <Text size="s" weight="bold" isStreched>A. COOKIES PROPIAS</Text>
        <Text size="s" weight="bold" isStreched>Cookies de Sesión</Text>
        <Text size="xs" styles={{ marginBottom: 16 }} isStreched>
          Permiten moverse por muchas páginas de un mismo sitio de manera fácil y rápida sin tener que autenticarse de nuevo o tener que iniciar el proceso en cada zona que visita.
        </Text>
        <Text size="s" weight="bold" isStreched>Cookies Técnicas</Text>
        <Paragraph size="xs">
          Necesarias para permitir al usuario la navegación a través de la página Web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.
          <br />
          Facilitan el control del tráfico y la comunicación de datos; permiten identificar la sesión y acceder a partes de acceso restringido; realizar la solicitud de inscripción o participación en un evento, así como utilizar elementos de seguridad durante la navegación.
        </Paragraph>
        <Text size="s" weight="bold" isStreched>B. COOKIES DE TERCEROS</Text>
        <Text size="s" weight="bold" isStreched>Cookies analíticas</Text>
        <Paragraph size="xs">
          Permiten la realización de informes estadísticos sobre el tráfico del sitio Web.
          <br />
          Estas cookies generan un ID de usuario anónimo que proporciona información sobre el número de páginas visitadas dentro de la Web, secciones visitadas, tiempo de navegación, dirección IP y dominios desde los cuales se accede a la página Web de Maisha Roots Spain.
        </Paragraph>
        <Text size="s" weight="bold" isStreched>Cookies usadas por complementos externos de contenido</Text>
        <Text size="xs" styles={{ marginBottom: 16 }} isStreched>
          Son necesarias para que el usuario pueda acceder a páginas de terceros alojados en nuestra Web.
        </Text>
      </Accordion>
      <Accordion title="¿Cómo puedo desactivar las cookies?">
        <Paragraph size="xs">
          Puesto que las cookies son archivos de texto normales, se pueden explorar con la mayoría de editores de texto o programas de procesamiento de texto. Puedes hacer clic en una cookie para abrirla.
          <br />
          A continuación, se indica una lista de enlaces sobre cómo ver cookies en diferentes navegadores. Si utilizas otro navegador, consulte la información sobre cookies en el propio navegador. Si utilizas un teléfono móvil, consulta el manual del dispositivo para obtener más información.
        </Paragraph>
        <ul style={{ marginBottom: 16 }}>
          <li><a target="_blank" rel="noreferrer" href="https://support.mozilla.org/en-US/kb/cookies-information-Websites-store-on-your-computer">Firefox</a></li>
          <li><a target="_blank" rel="noreferrer" href="https://support.google.com/chrome/bin/answer.py?hl=en&answer=95647&topic=14666&ctx=topic">Chrome</a></li>
          <li><a target="_blank" rel="noreferrer" href="http://windows.microsoft.com/en-US/internet-explorer/delete-manage-cookies">Internet Explorer 8-10</a></li>
          <li><a target="_blank" rel="noreferrer" href="http://support.apple.com/kb/ph5042">Safari</a></li>
          <li><a target="_blank" rel="noreferrer" href="http://support.apple.com/kb/ph5042">Opera</a></li>
        </ul>
        <Text size="s" weight="bold" isStreched>Configuración de cookies para los navegadores más populares</Text>
        <Text size="xs" styles={{ marginBottom: 16 }} isStreched>
          A continuación, te indicamos cómo acceder a una cookie determinada del navegador <Text size="xs" weight="bold">Chrome</Text> a: estos pasos pueden variar en función de la versión del navegador:
        </Text>
        <ol style={{ marginBottom: 16 }}>
          <li>Ve a Configuración o Preferencias mediante el menú Archivo o bien pinchando el icono de personalización que aparece arriba a la derecha.</li>
          <li>Verás diferentes secciones, pincha la opción <i>Mostrar opciones avanzadas.</i></li>
          <li>Ve a Privacidad, <i>Configuración de contenido.</i></li>
          <li>Selecciona <i>Todas las cookies y los datos de sitios.</i></li>
          <li>Aparecerá un listado con todas las cookies ordenadas por dominio. Para que te sea más fácil encontrar las cookies de un determinado dominio introduzca parcial o totalmente la dirección en el campo <i>Buscar cookies.</i></li>
          <li>Tras realizar este filtro aparecerán en pantalla una o varias líneas con las cookies de la Web solicitada. Ahora sólo tienes que seleccionarla y pulsar la X para proceder a su eliminación.</li>
        </ol>
        <Text size="xs" styles={{ marginBottom: 16 }} isStreched>
          A continuación, te indicamos cómo acceder a una cookie determinada del navegador <Text size="xs" weight="bold">Internet Explorer</Text> a: estos pasos pueden variar en función de la versión del navegador:
        </Text>
        <ol style={{ marginBottom: 16 }}>
          <li>Ve a <i>Herramientas, Opciones de Internet</i></li>
          <li>Haz clic en <i>Privacidad</i></li>
          <li>Mueve el deslizador hasta ajustar el nivel de privacidad que desees.</li>
        </ol>
        <Text size="xs" styles={{ marginBottom: 16 }} isStreched>
          A continuación, te indicamos cómo acceder a una cookie determinada del navegador <Text size="xs" weight="bold">Firefox</Text> a: estos pasos pueden variar en función de la versión del navegador:
        </Text>
        <ol style={{ marginBottom: 16 }}>
          <li>Ve a <i>Opciones o Preferencias</i> según tu sistema operativo.</li>
          <li>Haz clic en <i>Privacidad</i>.</li>
          <li>En <i>Historial</i> elige <i>Usar una configuración personalizada para el historial.</i></li>
          <li>Ahora verás la opción <i>Aceptar cookies</i>, puedes activarla o desactivarla según tus preferencias.</li>
        </ol>
        <Text size="xs" styles={{ marginBottom: 16 }} isStreched>
          A continuación, te indicamos cómo acceder a una cookie determinada del navegador <Text size="xs" weight="bold">Safari para OSX</Text> a: estos pasos pueden variar en función de la versión del navegador:
        </Text>
        <ol style={{ marginBottom: 16 }}>
          <li>Ve a <i>Preferencias</i>, luego <i>Privacidad</i>.</li>
          <li>En este lugar verás la opción <i>Bloquear cookies</i> para que ajuste el tipo de bloqueo que deseas realizar.</li>
        </ol>
        <Text size="xs" styles={{ marginBottom: 16 }} isStreched>
          A continuación, te indicamos cómo acceder a una cookie determinada del navegador <Text size="xs" weight="bold">Safari para iOS</Text> a: estos pasos pueden variar en función de la versión del navegador:
        </Text>
        <ol style={{ marginBottom: 16 }}>
          <li>Ve a <i>Ajustes</i>, luego <i>Safari</i>.</li>
          <li>Ve a <i>Privacidad y Seguridad</i>, verás la opción <i>Bloquear cookies</i> para que ajuste el tipo de bloqueo que deseas realizar.</li>
        </ol>
        <Text size="xs" styles={{ marginBottom: 16 }} isStreched>
          A continuación, te indicamos cómo acceder a una cookie determinada del navegador <Text size="xs" weight="bold">Android</Text> a: estos pasos pueden variar en función de la versión del navegador:
        </Text>
        <ol style={{ marginBottom: 16 }}>
          <li>Ejecuta el navegador y pulsa la tecla <i>Menú</i>, luego <i>Ajustes</i>.</li>
          <li>Ve a <i>Seguridad y Privacidad</i>, verás la opción <i>Aceptar cookies</i> para que active o desactive la casilla.</li>
        </ol>
        <Text size="xs" styles={{ marginBottom: 16 }} isStreched>
          A continuación, te indicamos cómo acceder a una cookie determinada del navegador <Text size="xs" weight="bold">Windows Phone</Text> a: estos pasos pueden variar en función de la versión del navegador:
        </Text>
        <ol style={{ marginBottom: 16 }}>
          <li>Abre <i>Internet Explorer</i>, luego <i>Más</i>, luego <i>Configuración</i></li>
          <li>Ahora puedes activar o desactivar la casilla <i>Permitir cookies.</i></li>
        </ol>
      </Accordion>
    </div>
  )
}

export default Cookies
