import { useTranslation } from 'react-i18next';

export const useI18n = (key: string) => {
  const { t } = useTranslation();

  return t(key);
};
