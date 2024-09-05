import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import "./App.css";
import logoUsaly from "/assets/images/logo-usaly.png";
import { useEffect, useState } from 'react';

import { PortfolioItemInterface } from './models/portfolio-item.model';
import { getPortfolioItems } from './collections/portfolio.collection';
import { ServiceItemInterface } from './models/service-item.model';
import { getServiceItems } from './collections/services.collection';

export default function Component() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItemInterface[]>([]);
  const [isLoadingPortfolioItems, setIsLoadingPortfolioItems] = useState<boolean>(false);
  const [serviceItems, setServiceItems] = useState<ServiceItemInterface[]>([]);
  const [isLoadingServiceItems, setIsLoadingServiceItems] = useState<boolean>(false);

  useEffect(() => {
    (async() => {
      setIsLoadingPortfolioItems(true);
      try {
        const portfolioItems = await getPortfolioItems();
        setPortfolioItems(portfolioItems);
        setIsLoadingPortfolioItems(false);
      } catch (e) {
        setIsLoadingPortfolioItems(false);
        console.error(e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setIsLoadingServiceItems(true);
      try {
        const serviceItems = await getServiceItems();
        setServiceItems(serviceItems);
        setIsLoadingServiceItems(false);
      } catch (e) {
        setIsLoadingServiceItems(false);
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <img
          src={logoUsaly}
          alt="Portfolio screenshot"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <h2 className="text-2xl font-semibold">Software Engineering</h2>
      </header>

      <main>
        <section className="mb-4">
          <p className="text-lg text-center max-w-3xl mx-auto">
            Bienvenido a mi espacio digital. Aquí encontrarás todo lo que necesitas saber sobre mis servicios de desarrollo web,
            desde el diseño y desarrollo de sitios web personalizados hasta el mantenimiento y optimización.
            También ofrezco mentoring para ayudarte a mejorar tus habilidades como desarrollador.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="text-2xl font-semibold text-center mb-4">Servicios</h3>
          {(!serviceItems?.length && !isLoadingServiceItems) && <div className="text-center">
              No se han registrado items
            </div>}
            {
              (!serviceItems?.length && isLoadingServiceItems) && <div className="text-center">
                Cargando items...
              </div>
            }
          <Stack direction="horizontal" gap={2} className="justify-content-md-center overflow-auto py-2">
            {serviceItems.map((item, index) => {
              return (
                <Badge key={index} bg="dark">{item.title}</Badge>
              );
            })}
          </Stack>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-center mb-4">Recursos</h3>
          <div className="row">
            {(!portfolioItems?.length && !isLoadingPortfolioItems) && <div>
              No se han registrado items
            </div>}
            {
              (!portfolioItems?.length && isLoadingPortfolioItems) && <div>
                Cargando items...
              </div>
            }
            {portfolioItems.map((item, index) => {
              return (
                <div className="col-md-4 col-sm-12" key={index}>
                  <div className="p-2">
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <div className="text-break" dangerouslySetInnerHTML={{ __html: item.description }}></div>
                    <img
                      src={item.imageUrl}
                      alt="Portfolio screenshot"
                      className="w-full h-auto rounded-lg shadow-md portfolio-picture"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  )
}