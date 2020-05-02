import React, { useState, useEffect} from 'react';
import './App.css';

function App() {
  const [ isSupportBatteryManager, setSupportBatteryManager] = useState(false);
  const [ batteryCharging, setBatteryCharging ] = useState('');
  const [ batteryLevel, setBatteryLevel] = useState('');
  const [ batteryChargingTime, setBatteryChargingTime] = useState('');
  const [ batteryDischargingTime, setBatteryDischargingTime] = useState('');

  useEffect(() => {
    const getBattery  = async () => {
      if(window.navigator.getBattery) {
        setSupportBatteryManager(true);

        const battery = await window.navigator.getBattery()

        setBatteryCharging(battery.charging ? 'Yes' : 'No');
        setBatteryLevel(battery.level * 100 + "%");
        setBatteryChargingTime(battery.chargingTime + " seconds");
        setBatteryDischargingTime(battery.dischargingTime + " seconds")
      } else {
        setSupportBatteryManager(false);
      }
    }

    getBattery();
  }, [])

  return (
    <div className="App">
      {isSupportBatteryManager ? (
        <>
              <p>Battery Charging: {batteryCharging}</p>
              <p>Battery Level: {batteryLevel}</p>
              <p>Battery Charging Time: {batteryChargingTime}</p>
              <p>Battery Discharging Time: {batteryDischargingTime}</p>
        </>
      ) : (
        <p>This browser is not support battery manager</p>
      )}

    </div>
  );
}

export default App;
