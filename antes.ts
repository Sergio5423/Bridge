// --- ANTES: Explosión combinatoria por herencia y atributos privados ---

// Clase base genérica con atributos privados
class Device {
    private volume: number = 30;
    private on: boolean = false;

    public isEnabled(): boolean { return this.on; }
    public enable(): void { this.on = true; }
    public disable(): void { this.on = false; }
    public getVolume(): number { return this.volume; }
    public setVolume(v: number): void { this.volume = v; }
}

// 1. Controles para TV (Herencia directa y rígida)
class TVBasicRemote extends Device {
    // Hereda directamente de Device mezclando la Abstracción y la Implementación
    public power(): void {
        if (this.isEnabled()) this.disable();
        else this.enable();
    }
    public volumeDown(): void {
        this.setVolume(this.getVolume() - 10);
    }
}

class TVAdvancedRemote extends Device {
    public power(): void {
        if (this.isEnabled()) this.disable();
        else this.enable();
    }
    public volumeDown(): void {
        this.setVolume(this.getVolume() - 10);
    }
    public mute(): void {
        this.setVolume(0); // Función avanzada
    }
}

// 2. Controles para Radio (Duplicación masiva de código debido a la herencia rígida)
class RadioBasicRemote extends Device {
    public power(): void {
        if (this.isEnabled()) this.disable();
        else this.enable();
    }
    public volumeDown(): void {
        this.setVolume(this.getVolume() - 5);
    }
}

class RadioAdvancedRemote extends Device {
    public power(): void {
        if (this.isEnabled()) this.disable();
        else this.enable();
    }
    public volumeDown(): void {
        this.setVolume(this.getVolume() - 5);
    }
    public mute(): void {
        this.setVolume(0);
    }
}

// Consecuencia: Al usar `extends`, el control remoto se convierte en el dispositivo mismo 
// o viceversa, y si quieres un control para un nuevo dispositivo, debes volver a crear 
// clases separadas para básico y avanzado.