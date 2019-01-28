import React from 'react';

import { withApollo, Mutation } from 'react-apollo';
import Dropzone from 'react-dropzone';

import Grid from 'Components/Generics/Grid';
import { PROFILE_ID, PROFILE_STEP } from 'Utils/constants';
import * as styled from './styled';
// import Avatar from './images/tushant.jpg';
import { PERSONAL_PROFILE_QUERY, PERSONAL_PROFILE_MUTATION } from './query';

// updatePersonalProfile

type Props = {
  handleNext: Function,
  client: Object,
  step: number,
};

class Personal extends React.PureComponent<Props> {
  state = {
    personal: {
      full_name: 'Mr Admin',
      age: '25',
      company_name: 'ADminNeo',
      job_title: 'CEO',
      zip_code: '44600',
      bio: 'your bio here',
      website: 'https://www.admin.com',
      notes: '',
      avatar: '',
    },
  };

  dropzoneRef = React.createRef();

  componentDidMount() {
    this.executeQuery();
  }

  executeQuery = async () => {
    const { client } = this.props;
    const { personal } = this.state;
    const response = await client.query({
      query: PERSONAL_PROFILE_QUERY,
      variables: {},
    });
    console.log('response', response);
    if (response.data.profile) {
      this.setState({
        personal: {
          ...personal,
          full_name: response.data.profile.fullName,
          age: response.data.profile.age,
          company_name: response.data.profile.companyName,
          job_title: response.data.profile.jobTitle,
          zip_code: response.data.profile.zipCode,
          bio: response.data.profile.bio,
          website: response.data.profile.website,
          notes: response.data.profile.notes,
          avatar: response.data.profile.avatar,
        },
      });
    }
  };

  handleChange = ({ target: { name, value } }) => {
    const { personal } = this.state;
    this.setState({ personal: { ...personal, [name]: value } });
  };

  handleSubmit = (e, mutation) => {
    e.preventDefault();
    const { personal } = this.state;
    console.log('personal', personal);
    mutation({ variables: personal });
  };

  _confirm = async data => {
    const { updatePersonalProfile } = data;
    const { handleNext, step } = this.props;
    console.log('step', step);
    if (updatePersonalProfile.success) {
      localStorage.setItem(PROFILE_ID, updatePersonalProfile.profile.id);
      localStorage.setItem(PROFILE_STEP, Number(parseInt(step, 10) + 1));
      handleNext();
    }
  };

  renderAvatar = () => {
    const { personal } = this.state;
    if (typeof personal.avatar === 'object') {
      return personal.avatar.preview;
    }
    if (typeof personal.avatar === 'string' && personal.avatar !== '') {
      return `http://localhost:8000/media/${personal.avatar}`;
    }
    return personal.avatar;
  };

  render() {
    const { personal } = this.state;
    console.log('personal', personal);
    return (
      <styled.Profile>
        <Mutation mutation={PERSONAL_PROFILE_MUTATION} onCompleted={data => this._confirm(data)}>
          {mutation => (
            <styled.ProfileWrapper>
              <styled.Form action="" method="post" onSubmit={e => this.handleSubmit(e, mutation)}>
                <Grid columns={3}>
                  <styled.ProfileImage>
                    <styled.Caption>Your profile</styled.Caption>
                    <Dropzone
                      accept="image/jpeg, image/png, image/jpg"
                      disableClick
                      multiple={false}
                      ref={this.dropzoneRef}
                      onDrop={accepted => {
                        console.log('accepted', accepted);
                        this.setState({ personal: { ...personal, avatar: accepted[0] } });
                      }}
                    >
                      <styled.Avatar src={this.renderAvatar()} />
                      <styled.Username>Tushant Khatiwada</styled.Username>
                    </Dropzone>
                    <styled.Upload
                      type="button"
                      onClick={() => {
                        this.dropzoneRef.current.open();
                      }}
                    >
                      Upload New Avatar
                    </styled.Upload>
                    <styled.Slogan>
                      <styled.SloganTitle>Your Slogan</styled.SloganTitle>
                      <styled.SloganText>
                        All of us has something special that makes us as beautiful as flower. The bottomline is to find
                        that speciality within us.
                      </styled.SloganText>
                    </styled.Slogan>
                  </styled.ProfileImage>

                  <styled.ProfilePersonal>
                    <styled.Caption>Edit your personal settings</styled.Caption>
                    <styled.FormField>
                      <styled.Label>Full Name</styled.Label>
                      <input
                        type="text"
                        name="full_name"
                        value={personal.full_name}
                        onChange={this.handleChange}
                        className="form-input"
                        placeholder="Full Name"
                        required
                      />
                    </styled.FormField>

                    <styled.FormField>
                      <styled.Label>Age</styled.Label>
                      <input
                        type="text"
                        name="age"
                        value={personal.age}
                        className="form-input"
                        onChange={this.handleChange}
                        placeholder="Age"
                        required
                      />
                    </styled.FormField>

                    <styled.FormField>
                      <styled.Label>Name of Company</styled.Label>
                      <input
                        type="text"
                        name="company_name"
                        value={personal.company_name}
                        className="form-input"
                        onChange={this.handleChange}
                        placeholder="Name of Company"
                        required
                      />
                    </styled.FormField>

                    <styled.FormField>
                      <styled.Label>Job Title</styled.Label>
                      <input
                        type="text"
                        name="job_title"
                        value={personal.job_title}
                        className="form-input"
                        onChange={this.handleChange}
                        placeholder="Job Title"
                        required
                      />
                    </styled.FormField>
                    <styled.FormField>
                      <styled.Label>Zip Code</styled.Label>
                      <input
                        type="text"
                        name="zip_code"
                        value={personal.zip_code}
                        className="form-input"
                        onChange={this.handleChange}
                        placeholder="Zip Code"
                        required
                      />
                    </styled.FormField>
                    <styled.FormField>
                      <styled.Label>Bio</styled.Label>
                      <textarea name="bio" onChange={this.handleChange} value={personal.bio} />
                    </styled.FormField>
                  </styled.ProfilePersonal>
                  <styled.ProfileExternal>
                    <styled.Caption>Your external links</styled.Caption>
                    <styled.FormField>
                      <styled.Label>Website</styled.Label>
                      <input
                        type="text"
                        name="website"
                        value={personal.website}
                        className="form-input"
                        onChange={this.handleChange}
                        placeholder="Website"
                        required
                      />
                    </styled.FormField>
                    <styled.FormField>
                      <input type="submit" value="Continue" />
                    </styled.FormField>
                  </styled.ProfileExternal>
                </Grid>
              </styled.Form>
            </styled.ProfileWrapper>
          )}
        </Mutation>
      </styled.Profile>
    );
  }
}

export default withApollo(Personal);
