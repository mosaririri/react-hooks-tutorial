import React from 'react';
import OperationLogType from '../types/OperationLogType';

const OperationLog = (props: {
  key: number;
  operationLog: OperationLogType;
}) => {
  return (
    <tr>
      <td>{props.operationLog.description}</td>
      <td>{props.operationLog.operatedAt}</td>
    </tr>
  );
};

export default OperationLog;
