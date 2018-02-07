// React
import React from 'react';

// Vendor
import styled from 'styled-components';

// Config
import theme from '../../styles/theme';

// Components
import ContentList from '../ContentList';

// Styles
const App = ({ className }) => {
  return (
    <div className={className}>
      <ContentList />
    </div>
  );
};

export default styled(App)`
  color: ${theme.colors.accentDark};
`;
