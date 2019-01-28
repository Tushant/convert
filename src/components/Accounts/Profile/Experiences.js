import React from 'react';

import Autocomplete from 'Components/Generics/Autocomplete';
import { matchStateToTerm } from 'Components/Generics/Autocomplete/utils';
import * as styled from './styled';

type Props = {
  experiences: Object,
  handleChange: Function,
  handleAutocompleteChange: Function,
  handleSelect: Function,
};

const Experiences = ({ experiences, handleChange, handleAutocompleteChange, handleSelect }: Props) => (
  <React.Fragment>
    <styled.FormField>
      <styled.Label>Title</styled.Label>
      {/* <input
        type="text"
        name="title"
        id="title"
        value={experiences.title}
        onChange={handleChange}
        className="form-input"
        placeholder="Title"
        required
      /> */}
      <Autocomplete
        inputProps={{
          name: 'title',
          placeholder: 'Title',
        }}
        items={[
          {
            id: 1,
            name: 'CEO',
          },
          {
            id: 2,
            name: 'CFO',
          },
          {
            id: 3,
            name: 'COO',
          },
        ]}
        value={experiences.title}
        getItemValue={item => item.name}
        onChange={handleAutocompleteChange}
        onSelect={handleSelect}
        shouldItemRender={matchStateToTerm}
        keyForRender="name"
        wrapperStyle={{ position: 'relative', display: 'inline-block' }}
        addNewItem
        renderMenu={children => <div className="menu">{children}</div>}
        renderItem={(item, isHighlighted) => (
          <div className={`item ${isHighlighted ? 'item-highlighted' : ''}`} key={item.id}>
            {item.name}
          </div>
        )}
      />
    </styled.FormField>
    <styled.FormField>
      <styled.Label>Name of Company</styled.Label>
      <input
        type="text"
        name="company"
        id="company"
        value={experiences.company}
        onChange={handleChange}
        className="form-input"
        placeholder="Name of Company"
        required
      />
    </styled.FormField>
    <styled.FormField>
      <styled.Label>Location</styled.Label>
      <input
        type="text"
        name="location"
        id="location"
        value={experiences.location}
        onChange={handleChange}
        className="form-input"
        placeholder="Location"
        required
      />
    </styled.FormField>
    <styled.FormField>
      <styled.Label>From</styled.Label>
      <input
        type="text"
        name="from"
        id="from"
        value={experiences.from}
        onChange={handleChange}
        className="form-input"
        placeholder="From"
        required
      />
    </styled.FormField>
    <styled.FormField>
      <styled.Label>To</styled.Label>
      <input
        type="text"
        name="to"
        id="to"
        value={experiences.to}
        onChange={handleChange}
        className="form-input"
        placeholder="To"
        required
      />
    </styled.FormField>
    <styled.FormField>
      <styled.Label>Headline</styled.Label>
      <input
        type="text"
        name="headline"
        id="headline"
        value={experiences.headline}
        onChange={handleChange}
        className="form-input"
        placeholder="Headline"
        required
      />
    </styled.FormField>
    <styled.FormField>
      <styled.Label>Description</styled.Label>
      <input
        type="text"
        name="description"
        id="description"
        value={experiences.description}
        onChange={handleChange}
        className="form-input"
        placeholder="Description"
        required
      />
    </styled.FormField>
    <styled.FormField>
      <input type="submit" value="Add Experience" />
    </styled.FormField>
  </React.Fragment>
);

export default Experiences;
