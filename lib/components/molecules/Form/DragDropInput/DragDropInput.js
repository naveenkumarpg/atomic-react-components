import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Label from '../../../atoms/Label';
import { ButtonVanilla as Button } from '../../../atoms/Button/Button';
import Input from '../../../atoms/Input';
import useOpenFileDialog from '../../../../hooks/useOpenFileDialog';
import useDragAndDrop from '../../../../hooks/useDragNDrop';
import styles from './DragDropInput.style';

const { openFileDialog } = useOpenFileDialog();

const DDFieldInput = ({
  id,
  className,
  name,
  label,
  onChange,
  onBlur,
  labelProps,
  fieldProps,
  localeText,
  register,
  setValue,
  ...others
}) => {
  const fileInput = React.createRef();
  const { onDragOver, onDragLeave, onDrop, onFilesAdded, getHighlightClass } = useDragAndDrop();
  const styleCls = getHighlightClass(className);
  useEffect(() => {
    register({ name });
  }, [register]);

  return (
    <Button
      className={styleCls}
      onClick={() => openFileDialog(fileInput)}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={(e) => {
        const file = onDrop(e);
        setValue(name, file);
      }}
    >
      <Label htmlFor={id} {...labelProps}>
        {label}
      </Label>
      <Input
        type="file"
        ref={fileInput}
        name={name}
        {...others}
        onChange={(e) => {
          const file = onFilesAdded(e);
          setValue(name, file);
        }}
        {...fieldProps}
      />
      {localeText.dragHelperText}
    </Button>
  );
};

DDFieldInput.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  labelProps: PropTypes.objectOf(PropTypes.object),
  fieldProps: PropTypes.objectOf(PropTypes.object),
  localeText: PropTypes.objectOf(PropTypes.object),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

DDFieldInput.defaultProps = {
  className: 'dragAndDrop',
  labelProps: {},
  fieldProps: {},
  onChange: null,
  onBlur: null,
  localeText: {
    dragHelperText: 'Drop Files Here...',
  },
};

const StyledDDFieldInput = styled(DDFieldInput)`
  ${styles};
`;

export default StyledDDFieldInput;

export { DDFieldInput as DDFieldInputVanilla };
