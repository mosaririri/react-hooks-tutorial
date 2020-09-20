import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from '../actions';
import OperationLogType from '../types/OperationLogType';

const operationLogs = (state: OperationLogType[] = [], action: any) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operatedAt: action.peratedAt,
      };
      return [operationLog, ...state];
    case DELETE_ALL_OPERATION_LOGS:
      return [];
    default:
      return state;
  }
};

export default operationLogs;
