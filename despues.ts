// --- DESPUÉS: Implementación limpia con el Patrón Bridge ---

// 1. Interfaz de Implementación (Device)
export interface Device {
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
    getVolume(): number;
    setVolume(percent: number): void;
}

// 2. Implementaciones Concretas
class TV implements Device {
    private on = false;
    private volume = 30;

    isEnabled(): boolean { return this.on; }
    enable(): void { this.on = true; console.log("TV encendida."); }
    disable(): void { this.on = false; console.log("TV apagada."); }
    getVolume(): number { return this.volume; }
    setVolume(percent: number): void {
        this.volume = percent;
        console.log(`Volumen de TV ajustado a: ${this.volume}`);
    }
}

class Radio implements Device {
    private on = false;
    private volume = 15;

    isEnabled(): boolean { return this.on; }
    enable(): void { this.on = true; console.log("Radio encendida."); }
    disable(): void { this.on = false; console.log("Radio apagada."); }
    getVolume(): number { return this.volume; }
    setVolume(percent: number): void {
        this.volume = percent;
        console.log(`Volumen de Radio ajustado a: ${this.volume}`);
    }
}

// 3. Abstracción (RemoteControl) - Contiene el "Bridge" hacia el Device
class RemoteControl {
    private device: Device; // <--- El Puente

    constructor(device: Device) {
        this.device = device;
    }

    togglePower(): void {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            this.device.enable();
        }
    }

    volumeDown(): void {
        this.device.setVolume(this.device.getVolume() - 10);
    }

    volumeUp(): void {
        this.device.setVolume(this.device.getVolume() + 10);
    }

    public setDeviceVolume(volume: number): void {
        this.device.setVolume(volume);
    }
}

// 4. Abstracción Refinada (AdvancedRemoteControl)
class AdvancedRemoteControl extends RemoteControl {
    mute(): void {
        console.log("Silenciando dispositivo...");
        this.setDeviceVolume(0);
    }
}

// --- Uso / Demostración ---
function main() {
    // Manejar una TV con un control remoto avanzado
    const tv = new TV();
    const advancedRemote = new AdvancedRemoteControl(tv);

    advancedRemote.togglePower(); // Enciende la TV
    advancedRemote.mute();        // Silencia la TV usando la función avanzada y el puente

    console.log("-------------------");

    // Manejar una Radio con el mismo control avanzado (o uno básico) sin alterar código
    const radio = new Radio();
    const radioRemote = new AdvancedRemoteControl(radio);

    radioRemote.togglePower(); // Enciende la Radio
    radioRemote.mute();        // Silencia la Radio
}

main();