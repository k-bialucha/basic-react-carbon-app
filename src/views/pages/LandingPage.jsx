import React from 'react';
import PropTypes from 'prop-types';

import { fromJS } from 'immutable';

import Row, { Column } from 'carbon-react/lib/components/row/row';
import Pod from 'carbon-react/lib/components/pod/pod';

import Fieldset from 'carbon-react/lib/components/fieldset';
import Date from 'carbon-react/lib/components/date';
import Dropdown from 'carbon-react/lib/components/dropdown';
import Textbox from 'carbon-react/lib/components/textbox';
import Textarea from 'carbon-react/lib/components/textarea';

import PresenceValidator from 'carbon-react/lib/utils/validations/presence';
import LengthValidator from 'carbon-react/lib/utils/validations/length';
import DateRangeValidator from 'carbon-react/lib/utils/validations/date-within-range';
import RegexValidator from 'carbon-react/lib/utils/validations/regex';

import withFormStore from '../../data/withFormStore';

const labelPlacementCommonProps = {
  labelInline: true,
  labelWidth: 20,
  labelAlign: 'right',
};

const dropdownOptions = fromJS([
  {
    id: '1',
    name: 'orange',
  },
  {
    id: '2',
    name: 'blue',
  },
  {
    id: '3',
    name: 'black',
  },
]);

const LandingPage = props => {
  const handleValueChange = (event, fallbackName) => {
    const { name, value } = event.target;
    props.formStore.onUpdateField(name || fallbackName, value);
  };

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
              name="name"
              value={props.formStore.state.get('name')}
              onChange={handleValueChange}
              {...labelPlacementCommonProps}
              validations={[
                new PresenceValidator({
                  customMessage: 'this field is required',
                }),
                new LengthValidator({
                  min: 4,
                  max: 10,
                  customMessage:
                    'this text should contain from 4 up to 10 characters',
                }),
              ]}
            />
            <Date
              label="date"
              name="date"
              value={props.formStore.state.get('date')}
              onChange={event => {
                handleValueChange(event, 'date');
              }}
              {...labelPlacementCommonProps}
              validations={[
                new DateRangeValidator(3, {
                  customMessage: 'date can be set to up to 3 days from today',
                }),
              ]}
            />
            <Textarea
              label="text"
              name="text"
              value={props.formStore.state.get('text')}
              onChange={handleValueChange}
              {...labelPlacementCommonProps}
              validations={[
                new RegexValidator({
                  format: /^([^@#$%^&*]*)$/g,
                  customMessage:
                    'text cannot contain characters from the set: [@, #, $, %, ^, &, *]',
                }),
              ]}
            />
            <Dropdown
              label="color"
              name="color"
              value={props.formStore.state.get('color')}
              onChange={event => {
                handleValueChange(event, 'color');
              }}
              options={dropdownOptions}
              {...labelPlacementCommonProps}
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

LandingPage.propTypes = {
  formStore: PropTypes.shape({
    state: PropTypes.object.isRequired,
    onUpdateField: PropTypes.func.isRequired,
  }).isRequired,
};

export default withFormStore(LandingPage);
