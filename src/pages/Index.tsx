import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Province {
  id: string;
  name: string;
  capital: string;
  population: number;
  features: string;
  position: string;
  color: string;
}

const provinces: Province[] = [
  {
    id: 'askhinia',
    name: 'Столичный округ Асхиния',
    capital: 'Асхиния',
    population: 5.6,
    features: 'Столица, IT, финансы, СМИ, промышленность',
    position: 'Запад',
    color: '#2563EB'
  },
  {
    id: 'hviney',
    name: 'Столичный округ Хвиней',
    capital: 'Хвиней',
    population: 4.9,
    features: 'Главный порт, судостроение, рыболовство, ВПК, логистика',
    position: 'Север (побережье)',
    color: '#DC2626'
  },
  {
    id: 'central',
    name: 'Центральная провинция',
    capital: 'Сармонт',
    population: 3.9,
    features: 'Тяжёлая промышленность, транспортный хаб',
    position: 'Центр',
    color: '#059669'
  },
  {
    id: 'eastern',
    name: 'Восточная провинция',
    capital: 'Савея',
    population: 3.5,
    features: 'Технопарки, ВПК, НИОКР, IT-кластеры',
    position: 'Восток',
    color: '#DC8E26'
  },
  {
    id: 'western',
    name: 'Западная провинция',
    capital: 'Катрианпи',
    population: 2.6,
    features: 'Промышленность (авто, робототехника), порты-спутники',
    position: 'Запад',
    color: '#7C3AED'
  },
  {
    id: 'southern',
    name: 'Южная провинция',
    capital: 'Вега',
    population: 1.9,
    features: 'Сельское хозяйство (зерно, виноград, фрукты)',
    position: 'Юг',
    color: '#F29937'
  },
  {
    id: 'northern',
    name: 'Северная провинция',
    capital: 'Касалья',
    population: 1.4,
    features: 'Курорты, виноделие, лёгкая промышленность',
    position: 'Север',
    color: '#33F4F6'
  }
];

const Index = () => {
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.3, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.3, 0.5));
  };

  const handleProvinceClick = (province: Province) => {
    setSelectedProvince(province);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-8 bg-gradient-to-r from-white via-red-600 to-blue-600 rounded border border-slate-300"></div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Сашианийская Республика</h1>
                <p className="text-sm text-slate-600">Интерактивная карта административных единиц</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-slate-700 hover:text-blue-600">
                <Icon name="Home" size={16} className="mr-2" />
                Главная
              </Button>
              <Button variant="ghost" className="text-slate-700 hover:text-blue-600">
                <Icon name="Map" size={16} className="mr-2" />
                Карта
              </Button>
              <Button variant="ghost" className="text-slate-700 hover:text-blue-600">
                <Icon name="Building" size={16} className="mr-2" />
                Провинции
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card className="h-fit">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-slate-800">Административная карта</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" onClick={handleZoomOut}>
                      <Icon name="ZoomOut" size={16} />
                    </Button>
                    <span className="text-sm text-slate-600 w-16 text-center">{Math.round(zoomLevel * 100)}%</span>
                    <Button size="sm" variant="outline" onClick={handleZoomIn}>
                      <Icon name="ZoomIn" size={16} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative overflow-hidden bg-slate-100 rounded-lg border-2 border-slate-200">
                  <svg 
                    viewBox="0 0 800 600" 
                    className="w-full h-[500px] transition-transform duration-300 cursor-move"
                    style={{ transform: `scale(${zoomLevel})` }}
                  >
                    {/* Background */}
                    <rect width="800" height="600" fill="#f8fafc" />
                    
                    {/* Ocean */}
                    <rect x="0" y="0" width="800" height="120" fill="#0ea5e9" opacity="0.3" />
                    
                    {/* Neighboring countries */}
                    <rect x="650" y="120" width="150" height="300" fill="#94a3b8" opacity="0.4" />
                    <text x="725" y="280" textAnchor="middle" className="text-xs fill-slate-600">Кусария</text>
                    
                    <rect x="300" y="450" width="350" height="150" fill="#94a3b8" opacity="0.4" />
                    <text x="475" y="525" textAnchor="middle" className="text-xs fill-slate-600">Кальвария</text>
                    
                    <rect x="0" y="200" width="120" height="250" fill="#94a3b8" opacity="0.4" />
                    <text x="60" y="325" textAnchor="middle" className="text-xs fill-slate-600">Вестмарк</text>

                    {/* Sashian Republic provinces */}
                    
                    {/* Northern Province (Касалья) */}
                    <path
                      d="M 120 120 L 300 120 L 350 180 L 250 200 L 120 180 Z"
                      fill={provinces[6].color}
                      stroke="#1e293b"
                      strokeWidth="2"
                      className="hover:opacity-80 cursor-pointer transition-opacity"
                      onClick={() => handleProvinceClick(provinces[6])}
                    />
                    <text x="210" y="155" textAnchor="middle" className="text-xs font-semibold fill-white">Касалья</text>

                    {/* Capital District Hviney (Хвиней) */}
                    <path
                      d="M 300 120 L 500 120 L 550 180 L 450 200 L 350 180 Z"
                      fill={provinces[1].color}
                      stroke="#1e293b"
                      strokeWidth="2"
                      className="hover:opacity-80 cursor-pointer transition-opacity"
                      onClick={() => handleProvinceClick(provinces[1])}
                    />
                    <text x="425" y="155" textAnchor="middle" className="text-xs font-semibold fill-white">Хвиней</text>

                    {/* Western Province (Катрианпи) */}
                    <path
                      d="M 120 180 L 250 200 L 280 320 L 120 300 Z"
                      fill={provinces[4].color}
                      stroke="#1e293b"
                      strokeWidth="2"
                      className="hover:opacity-80 cursor-pointer transition-opacity"
                      onClick={() => handleProvinceClick(provinces[4])}
                    />
                    <text x="200" y="250" textAnchor="middle" className="text-xs font-semibold fill-white">Катрианпи</text>

                    {/* Capital District Askhinia (Асхиния) */}
                    <path
                      d="M 250 200 L 400 180 L 420 280 L 320 320 L 280 320 Z"
                      fill={provinces[0].color}
                      stroke="#1e293b"
                      strokeWidth="3"
                      className="hover:opacity-80 cursor-pointer transition-opacity"
                      onClick={() => handleProvinceClick(provinces[0])}
                    />
                    <text x="340" y="240" textAnchor="middle" className="text-xs font-semibold fill-white">Асхиния</text>
                    <circle cx="340" cy="250" r="3" fill="#fbbf24" />

                    {/* Central Province (Сармонт) */}
                    <path
                      d="M 400 180 L 550 180 L 580 300 L 420 280 Z"
                      fill={provinces[2].color}
                      stroke="#1e293b"
                      strokeWidth="2"
                      className="hover:opacity-80 cursor-pointer transition-opacity"
                      onClick={() => handleProvinceClick(provinces[2])}
                    />
                    <text x="485" y="230" textAnchor="middle" className="text-xs font-semibold fill-white">Сармонт</text>

                    {/* Eastern Province (Савея) */}
                    <path
                      d="M 550 180 L 650 120 L 650 350 L 580 300 Z"
                      fill={provinces[3].color}
                      stroke="#1e293b"
                      strokeWidth="2"
                      className="hover:opacity-80 cursor-pointer transition-opacity"
                      onClick={() => handleProvinceClick(provinces[3])}
                    />
                    <text x="610" y="250" textAnchor="middle" className="text-xs font-semibold fill-white">Савея</text>

                    {/* Southern Province (Вега) */}
                    <path
                      d="M 280 320 L 420 280 L 580 300 L 500 450 L 300 450 Z"
                      fill={provinces[5].color}
                      stroke="#1e293b"
                      strokeWidth="2"
                      className="hover:opacity-80 cursor-pointer transition-opacity"
                      onClick={() => handleProvinceClick(provinces[5])}
                    />
                    <text x="400" y="380" textAnchor="middle" className="text-xs font-semibold fill-white">Вега</text>

                    {/* Legend */}
                    <g transform="translate(20, 480)">
                      <rect x="0" y="0" width="180" height="100" fill="white" stroke="#e2e8f0" strokeWidth="1" rx="4" />
                      <text x="10" y="20" className="text-xs font-semibold fill-slate-700">Легенда:</text>
                      <circle cx="20" cy="35" r="3" fill="#fbbf24" />
                      <text x="30" y="40" className="text-xs fill-slate-600">Столица государства</text>
                      <rect x="10" y="50" width="12" height="8" fill="#0ea5e9" opacity="0.3" />
                      <text x="30" y="60" className="text-xs fill-slate-600">Сашианийский океан</text>
                      <rect x="10" y="70" width="12" height="8" fill="#94a3b8" opacity="0.4" />
                      <text x="30" y="80" className="text-xs fill-slate-600">Соседние государства</text>
                    </g>
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            {/* Country Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 flex items-center">
                  <Icon name="Flag" size={18} className="mr-2" />
                  Общие сведения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-slate-600">Население:</p>
                    <p className="font-semibold">23,8 млн</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Площадь:</p>
                    <p className="font-semibold">92,400 км²</p>
                  </div>
                  <div>
                    <p className="text-slate-600">ВВП:</p>
                    <p className="font-semibold">1,2 трлн ⚡</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Валюта:</p>
                    <p className="font-semibold">Сашин (SHN)</p>
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-slate-600 text-sm">Президент:</p>
                  <p className="font-semibold">Карл Маркес</p>
                </div>
              </CardContent>
            </Card>

            {/* Province Info */}
            {selectedProvince ? (
              <Card className="border-l-4" style={{ borderLeftColor: selectedProvince.color }}>
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">{selectedProvince.name}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    <Icon name="MapPin" size={12} className="mr-1" />
                    {selectedProvince.position}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-slate-600 text-sm">Административный центр:</p>
                    <p className="font-semibold">{selectedProvince.capital}</p>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm">Население:</p>
                    <p className="font-semibold">{selectedProvince.population} млн</p>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm">Особенности:</p>
                    <p className="text-sm leading-relaxed">{selectedProvince.features}</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-dashed border-2 border-slate-300">
                <CardContent className="text-center py-8">
                  <Icon name="MousePointer" size={24} className="mx-auto mb-3 text-slate-400" />
                  <p className="text-slate-600">Нажмите на провинцию для просмотра информации</p>
                </CardContent>
              </Card>
            )}

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">Быстрые действия</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="BarChart3" size={16} className="mr-2" />
                  Экономические показатели
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Shield" size={16} className="mr-2" />
                  Вооружённые силы
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Globe" size={16} className="mr-2" />
                  Международные отношения
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 mt-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Сашианийская Республика</h3>
              <p className="text-slate-300 text-sm">Суверенное государство на северо-западе материка Альвания. Независимость с 15 августа 1948 года.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Контакты</h3>
              <p className="text-slate-300 text-sm">Столица: Асхиния</p>
              <p className="text-slate-300 text-sm">Телефонный код: +47</p>
              <p className="text-slate-300 text-sm">Интернет-домен: .sh</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Девиз</h3>
              <p className="text-slate-300 italic">"Слава Республике, Слава Сашиании!"</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;