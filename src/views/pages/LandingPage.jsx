import React from 'react';

import Row, { Column } from 'carbon-react/lib/components/row/row';
import Pod from 'carbon-react/lib/components/pod/pod';

import Fieldset from 'carbon-react/lib/components/fieldset';
import Date from 'carbon-react/lib/components/date';
import Textbox from 'carbon-react/lib/components/textbox';
import Textarea from 'carbon-react/lib/components/textarea';

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
        <Pod title="My Form" alignTitle="center" as="tile" padding="large">
          <Fieldset>
            <Textbox
              label="name"
              labelInline
              labelWidth={20}
              labelAlign="right"
            />
            <Date label="date" labelInline labelWidth={20} labelAlign="right" />
            <Textarea
              label="text"
              labelInline
              labelWidth={20}
              labelAlign="right"
            />
          </Fieldset>
        </Pod>
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
