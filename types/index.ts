export interface i18nData {
	Key: string,
	Value: string
}

export interface Answer {
  id: string
  scale: number | null
}

export interface Questionnaire {
  id: string
  title: string
}
export interface LoginInfo {
  Email: string,
  Password: string,
  CompanyCode?: string
}