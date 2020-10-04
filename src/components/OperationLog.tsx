import React from 'react';

const OperationLog = (props: any) => {
  return (
    <tr>
      <td>{props.operationLog.description}</td>
      <td>{props.operationLog.operatedAt}</td>
    </tr>
  );
};

export default OperationLog;
