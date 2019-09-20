import React from 'react';

import Row, { Column } from 'carbon-react/lib/components/row/row';

const LandingPage = () => {
  return (
    <Row columns="2" columnDivide={false} gutter="small">
      <Column>
        <section>
          <h3>Landing Page</h3>
          <p>Some landing page</p>
        </section>
      </Column>
      <Column>
        <section>
          <h3>Lorem Ipsum [1]</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus.
          </p>
        </section>
      </Column>
      <Column>
        <section>
          <h3>Lorem Ipsum [2]</h3>
          <p>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
            quo voluptas nulla pariatur?
          </p>
        </section>
      </Column>
    </Row>
  );
};

export default LandingPage;
