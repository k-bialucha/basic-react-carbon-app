import React from 'react';

import Row, { Column } from 'carbon-react/lib/components/row/row';

const FirstPage = () => {
  return (
    <Row columns="3" columnDivide gutter="medium-large">
      <Column>
        <section>
          <h3>First Page</h3>
          <p>Some first page</p>
        </section>
      </Column>
      <Column>
        <section>
          <h3>Lorem Ipsum [1]</h3>
          <p>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
            quo voluptas nulla pariatur?
          </p>
        </section>
      </Column>
      <Column>
        <section>
          <h3>Lorem Ipsum [2]</h3>
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae.
          </p>
        </section>
      </Column>
      <Column>
        <section>
          <h3>Lorem Ipsum [3]</h3>
          <p>
            Consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam
          </p>
        </section>
      </Column>
    </Row>
  );
};

export default FirstPage;
