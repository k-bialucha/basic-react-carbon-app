import React from 'react';

import Row, { Column } from 'carbon-react/lib/components/row/row';
import Pod from 'carbon-react/lib/components/pod/pod';

import HeaderTextEditor from '../../containers/HeaderTextEditor.jsx';

import DecoratedText from '../../components/DecoratedText.jsx';
import PortalToTop from '../../components/PortalToTop.jsx';
import TextDecoratorInput from '../../components/TextDecoratorInput.jsx';

const SecondPage = () => {
  return (
    <>
      <PortalToTop>
        <Pod title="Additional Content" alignTitle="center" as="tertiary">
          This is a test of a portalled text
        </Pod>
      </PortalToTop>
      <Row columns="2" columnDivide={false} gutter="small">
        <Column>
          <section>
            <h3>Decorate Text</h3>
            <TextDecoratorInput>
              {text => (
                <ul>
                  <li>
                    <DecoratedText text={text} separator="*" />
                  </li>
                  <li>
                    <DecoratedText text={text} separator="-" />
                  </li>
                </ul>
              )}
            </TextDecoratorInput>
          </section>
        </Column>
        <Column>
          <section>
            <h3>Second Page</h3>
            <p>Some second page</p>
            <p>
              <HeaderTextEditor />
            </p>
          </section>
        </Column>
        <Column>
          <section>
            <h3>Lorem Ipsum [2]</h3>
            <p>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas assumenda est, omnis dolor repellendus.
            </p>
            <p>
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae.
            </p>
          </section>
        </Column>
        <Column>
          <section>
            <h3>Lorem Ipsum [3]</h3>
            <p>
              Consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam
            </p>
          </section>
        </Column>
      </Row>
    </>
  );
};

export default SecondPage;
