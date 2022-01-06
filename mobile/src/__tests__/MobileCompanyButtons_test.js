import React from 'react';
import renderer from 'react-test-renderer';
import MobileCompany from '../components/MobileCompany/MobileCompany';
import clients from '../clients.json';

let companyName = 'MTS'

test('работа кнопки Все', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <MobileCompany clients={clients} name={companyName}/>
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку
  const buttonElem = component.root.findByProps({value: 'Все'}); 
  // и "нажмём" на неё
  buttonElem.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElem.props.onClick();
  
  // и получаем окончательный снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
});

test('работа кнопки Активные', () => {

    const component = renderer.create(
      <MobileCompany clients={clients} name={companyName}/>
    );
  
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
  
    const buttonElem = component.root.findByProps({value: 'Активные'}); 
    buttonElem.props.onClick();
  
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
  
    buttonElem.props.onClick();
    
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

test('работа кнопки Заблокированные', () => {

    const component = renderer.create(
      <MobileCompany clients={clients} name={companyName}/>
    );
  
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
  
    const buttonElem = component.root.findByProps({value: 'Заблокированные'}); 
    buttonElem.props.onClick();
  
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
  
    buttonElem.props.onClick();
    
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

test('работа кнопки Добавить клиента', () => {

    const component = renderer.create(
      <MobileCompany clients={clients} name={companyName}/>
    );
  
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
  
    const buttonElem = component.root.findByProps({value: 'Добавить клиента'}); 
    buttonElem.props.onClick();
  
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
  
    buttonElem.props.onClick();
    
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});