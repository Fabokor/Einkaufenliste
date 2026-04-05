# 🛒 Einkaufsliste — PWA

Eine smarte Einkaufsliste als Progressive Web App (PWA).  
Funktioniert auf Android & iPhone — installierbar wie eine echte App.

## ✨ Features

- 🔍 **200+ Produkte** von Lidl, Aldi, Rewe, Edeka, Penny, Netto, Kaufland
- ⚖️ **Preisrechner** — Preis nach Gewicht berechnen
- ✏️ **Artikel bearbeiten** nach dem Hinzufügen
- 📂 **Kategorien-Filter** für schnelles Suchen
- 💾 **Daten bleiben gespeichert** (localStorage)
- 📵 **Offline nutzbar** (Service Worker)
- 📲 **Installierbar** auf Homescreen

---

## 🚀 GitHub Pages einrichten (Schritt für Schritt)

### 1. Repository erstellen
1. Gehe zu [github.com](https://github.com) → **"New repository"**
2. Name: `einkaufsliste` (oder beliebig)
3. Sichtbarkeit: **Public** ✅
4. Klicke **"Create repository"**

### 2. Dateien hochladen
1. Im neuen Repository: **"Add file" → "Upload files"**
2. Diese 4 Dateien hochladen:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon.svg`
3. Klicke **"Commit changes"**

### 3. GitHub Pages aktivieren
1. Im Repository: **Settings** (oben rechts)
2. Links im Menü: **"Pages"**
3. Under "Branch": wähle **`main`** → Ordner **`/ (root)`**
4. Klicke **"Save"**
5. Nach ~1 Minute erscheint deine URL:  
   `https://DEIN-USERNAME.github.io/einkaufsliste/`

### 4. App installieren
- **Android Chrome**: Öffne die URL → gelbes Banner erscheint → "Installieren"
- **iPhone Safari**: Öffne die URL → Teilen ⬆️ → "Zum Home-Bildschirm" → "Hinzufügen"

---

## 📁 Dateistruktur

```
einkaufsliste/
├── index.html      ← Haupt-App (HTML + CSS + JS)
├── manifest.json   ← PWA Manifest (App-Name, Icon, Farben)
├── sw.js           ← Service Worker (Offline-Funktion)
├── icon.svg        ← App-Icon (Homescreen)
└── README.md       ← Diese Anleitung
```

---

## 🔧 Lokaler Test (ohne GitHub)

```bash
# Python HTTP Server starten
python3 -m http.server 8080

# Dann im Browser öffnen:
# http://localhost:8080
```

> **Hinweis:** PWA/Service Worker funktioniert nur über HTTPS oder localhost — nicht direkt als Datei geöffnet.
