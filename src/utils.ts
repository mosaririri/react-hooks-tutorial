// 日時をISO8601にフォーマットした値を生成する
export const timeCurrentIso8601: () => string = () => new Date().toISOString();
