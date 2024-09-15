// src/components/LanguageSwitcher.js
import React from 'react';
import { Menu, Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';
import { DownOutlined } from '@ant-design/icons';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const menu = (
    <Menu>
      {languages.map(({ code, name, flag }) => (
        <Menu.Item key={code} onClick={() => handleLanguageChange(code)}>
          <span className="flex items-center space-x-2">
            <span>{flag}</span>
            <span>{name}</span>
          </span>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['hover']}>
      <a className="ant-dropdown-link flex items-center space-x-2" onClick={e => e.preventDefault()}>
        <span>🌐</span> <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default LanguageSwitcher;
