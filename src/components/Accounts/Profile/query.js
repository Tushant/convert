import gql from 'graphql-tag';

export const PERSONAL_PROFILE_QUERY = gql`
  query {
    profile {
      id
      bio
      fullName
      companyName
      age
      jobTitle
      zipCode
      website
      avatar
      notes
    }
  }
`;

export const BACKGROUND_QUERY = gql`
  query {
    profile {
      id
      experiences
    }
  }
`;

export const PERSONAL_PROFILE_MUTATION = gql`
  mutation updatePersonalProfileMutation(
    $full_name: String!
    $age: String!
    $company_name: String!
    $job_title: String!
    $zip_code: String!
    $bio: String!
    $website: String!
    $notes: String!
    $avatar: Upload!
  ) {
    updatePersonalProfile(
      input: {
        fullName: $full_name
        age: $age
        companyName: $company_name
        jobTitle: $job_title
        zipCode: $zip_code
        bio: $bio
        website: $website
        notes: $notes
        avatar: $avatar
      }
    ) {
      success
      errors
      profile {
        id
        bio
      }
    }
  }
`;
