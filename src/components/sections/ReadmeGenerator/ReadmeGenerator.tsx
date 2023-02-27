// === Components === //
import Wrapper from '../../layout/Wrapper/Wrapper';
import ReadmeConfig from '../ReadmeConfig/ReadmeConfig';
import ReadmePreview from '../ReadmePreview/ReadmePreview';

// === Helpers === //
import { useState } from 'react';

// === Styles === //
import styles from './ReadmeGenerator.module.scss';

// === Types === //
import { IReadmeGenerator, IReadmeGeneratorState } from './ReadmeGenerator.d';
import { IDropdownOption } from '../../common/Dropdown/Dropdown.d';

const ReadmeGenerator = ({ darkMode }: IReadmeGenerator) => {
  const [state, setState] = useState<IReadmeGeneratorState>({
    framework: null,
    node: null,
    customNode: '',
    language: { label: 'EN', value: 'en' },
  });

  const handleChangeState = (name: string, value: IDropdownOption | null) => {
    setState({ ...state, [name]: value });
  };

  return (
    <Wrapper>
      <div className={styles.inner}>
        <ReadmeConfig darkMode={darkMode} state={state} handleChangeState={handleChangeState} />
        <ReadmePreview />
      </div>
    </Wrapper>
  );
};

export default ReadmeGenerator;
