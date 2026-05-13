// TVSPUTNIK - Главное приложение
// Поисковой робот ТВ каналов и Радио по всему миру

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация карты
    const map = L.map('world-map').setView([20, 0], 2);
    
    // Добавляем слой карты (используем бесплатный OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 6,
        minZoom: 2
    }).addTo(map);
    
    // DOM элементы
    const playerModal = document.getElementById('player-modal');
    const closePlayerBtn = document.getElementById('close-player');
    const videoPlayer = document.getElementById('video-player');
    const audioPlayer = document.getElementById('audio-player');
    const channelNameEl = document.getElementById('channel-name');
    const channelCountryEl = document.getElementById('channel-country');
    const channelsSection = document.getElementById('channels-section');
    const channelsGrid = document.getElementById('channels-grid');
    const countryTitle = document.getElementById('country-title');
    const searchInfo = document.getElementById('search-info');
    
    let currentHls = null;
    let activeMarker = null;
    
    // Функция для добавления маркеров стран на карту
    function addCountryMarkers() {
        // Координаты центров стран
        const countryCoordinates = {
            "RU": { lat: 61.524, lng: 105.3188, zoom: 3 },
            "US": { lat: 37.0902, lng: -95.7129, zoom: 3 },
            "GB": { lat: 55.3781, lng: -3.436, zoom: 5 },
            "DE": { lat: 51.1657, lng: 10.4515, zoom: 5 },
            "FR": { lat: 46.2276, lng: 2.2137, zoom: 5 },
            "ES": { lat: 40.4637, lng: -3.7492, zoom: 5 },
            "IT": { lat: 41.8719, lng: 12.5674, zoom: 5 },
            "CN": { lat: 35.8617, lng: 104.1954, zoom: 3 },
            "JP": { lat: 36.2048, lng: 138.2529, zoom: 5 },
            "CA": { lat: 56.1304, lng: -106.3468, zoom: 3 },
            "AU": { lat: -25.2744, lng: 133.7751, zoom: 3 },
            "BR": { lat: -14.235, lng: -51.9253, zoom: 3 },
            "IN": { lat: 20.5937, lng: 78.9629, zoom: 4 },
            "KR": { lat: 35.9078, lng: 127.7669, zoom: 6 },
            "TR": { lat: 38.9637, lng: 35.2433, zoom: 5 },
            "PL": { lat: 51.9194, lng: 19.1451, zoom: 5 },
            "NL": { lat: 52.1326, lng: 5.2913, zoom: 6 },
            "SE": { lat: 60.1282, lng: 18.6435, zoom: 5 },
            "NO": { lat: 60.472, lng: 8.4689, zoom: 5 },
            "MX": { lat: 23.6345, lng: -102.5528, zoom: 4 },
            "AR": { lat: -38.4161, lng: -63.6167, zoom: 4 }
        };
        
        // Добавляем маркеры для каждой страны
        for (const [code, data] of Object.entries(channelsData)) {
            if (countryCoordinates[code]) {
                const coords = countryCoordinates[code];
                
                // Создаем кастомную иконку
                const markerIcon = L.divIcon({
                    className: 'custom-marker',
                    html: `<div style="
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-size: 16px;
                        border: 3px solid white;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                    ">📡</div>`,
                    iconSize: [30, 30],
                    iconAnchor: [15, 15]
                });
                
                const marker = L.marker([coords.lat, coords.lng], { icon: markerIcon })
                    .addTo(map)
                    .bindPopup(`<b>${data.name}</b><br>Доступно каналов: ${data.channels.length}`);
                
                marker.on('click', function() {
                    selectCountry(code, coords);
                });
            }
        }
    }
    
    // Выбор страны
    function selectCountry(countryCode, coords) {
        const countryData = channelsData[countryCode];
        
        if (!countryData) return;
        
        // Обновляем информацию о поиске
        searchInfo.innerHTML = `
            <div class="robot-avatar">🤖</div>
            <p class="robot-message"><strong>Поисковой робот TVSPUTNIK</strong> нашел ${countryData.channels.length} каналов и радиостанций в стране "${countryData.name}". Выберите канал для просмотра!</p>
        `;
        
        // Отображаем секцию с каналами
        countryTitle.textContent = `Каналы и Радио: ${countryData.name}`;
        channelsGrid.innerHTML = '';
        
        // Создаем карточки каналов
        countryData.channels.forEach(channel => {
            const card = document.createElement('div');
            card.className = `channel-card ${channel.type}`;
            card.innerHTML = `
                <div class="channel-icon">${channel.icon}</div>
                <div class="channel-name">${channel.name}</div>
                <div class="channel-type">${channel.type === 'video' ? 'ТВ Канал' : 'Радио'}</div>
            `;
            
            card.addEventListener('click', function() {
                playChannel(channel, countryData.name);
            });
            
            channelsGrid.appendChild(card);
        });
        
        channelsSection.classList.add('active');
        
        // Плавная прокрутка к секции с каналами
        setTimeout(() => {
            channelsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    }
    
    // Воспроизведение канала
    function playChannel(channel, countryName) {
        // Сбрасываем предыдущий плеер
        resetPlayer();
        
        // Устанавливаем информацию о канале
        channelNameEl.textContent = channel.name;
        channelCountryEl.textContent = countryName;
        
        // Определяем тип контента
        if (channel.type === 'video') {
            videoPlayer.style.display = 'block';
            audioPlayer.style.display = 'none';
            
            // Проверяем поддержку HLS
            if (Hls.isSupported() && (channel.url.includes('.m3u8') || channel.url.includes('hls'))) {
                currentHls = new Hls();
                currentHls.loadSource(channel.url);
                currentHls.attachMedia(videoPlayer);
                currentHls.on(Hls.Events.MANIFEST_PARSED, function() {
                    videoPlayer.play().catch(e => console.log('Autoplay prevented:', e));
                });
            } else if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
                // Нативная поддержка HLS (Safari)
                videoPlayer.src = channel.url;
                videoPlayer.addEventListener('loadedmetadata', function() {
                    videoPlayer.play().catch(e => console.log('Autoplay prevented:', e));
                });
            } else {
                // Пробуем воспроизвести как обычный поток
                videoPlayer.src = channel.url;
                videoPlayer.play().catch(e => console.log('Autoplay prevented:', e));
            }
        } else {
            // Аудио (радио)
            videoPlayer.style.display = 'none';
            audioPlayer.style.display = 'block';
            audioPlayer.src = channel.url;
            audioPlayer.play().catch(e => console.log('Autoplay prevented:', e));
        }
        
        // Показываем модальное окно с плеером
        playerModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Сброс плеера
    function resetPlayer() {
        if (currentHls) {
            currentHls.destroy();
            currentHls = null;
        }
        
        videoPlayer.pause();
        videoPlayer.src = '';
        audioPlayer.pause();
        audioPlayer.src = '';
    }
    
    // Закрытие плеера
    function closePlayer() {
        playerModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        resetPlayer();
    }
    
    // Обработчики событий
    closePlayerBtn.addEventListener('click', closePlayer);
    
    playerModal.addEventListener('click', function(e) {
        if (e.target === playerModal) {
            closePlayer();
        }
    });
    
    // Закрытие по клавише Esc
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && playerModal.classList.contains('active')) {
            closePlayer();
        }
    });
    
    // Инициализация
    addCountryMarkers();
    
    // Приветственное сообщение от робота
    console.log('%c TVSPUTNIK 🛰️ ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 20px; padding: 10px 20px; border-radius: 5px;');
    console.log('Поисковой робот готов к работе! Выберите страну на карте для поиска ТВ каналов и радио.');
});
