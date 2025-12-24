# The Unknowable - Immersive Intro Experience

## Overview

This website now features an immersive intro experience inspired by Jon Bois's *17776*, with aesthetic elements drawn from The Unknowable poster. The experience creates a narrative journey that leads visitors into the world of the operatic ballet.

## Files

### Main Pages
- **`Welcome`** - The scrolling intro experience (landing page)
- **`index.html`** - The main website content

### How It Works

1. **First Visit**: Users land on `Welcome` and experience the scrolling narrative
2. **Scroll Experience**: As users scroll, text appears and "The Unknowable" grows to fill the screen
3. **Automatic Transition**: At 90% scroll progress, the page automatically transitions to the main site
4. **Cookie Memory**: A cookie remembers the user has seen the intro
5. **Subsequent Visits**: Future visits go directly to `index.html#video`

## Features

### Intro Page (`Welcome`)

#### Visual Effects
- **Particle System**: 50 animated particles inspired by the poster's sparkle effect
- **Flowing Ribbon**: Animated SVG ribbon mimicking the red ribbon in the poster
- **Purple Gradient Background**: Deep purple tones matching the poster aesthetic
- **Growing Text Effect**: "THE UNKNOWABLE" enlarges dramatically as you scroll

#### Scroll Mechanics
- Progressive text reveal with fade-in animations
- Font size grows from 2rem to ~14rem at full scroll
- Smooth transitions using cubic-bezier easing
- Text sections appear at different scroll positions

#### User Controls
- **Skip Button**: Bottom-right button to bypass intro and go directly to main site
- **Cookie Persistence**: Remembers if user has seen intro (365-day expiration)

### Main Site Enhancements (`index.html`)

#### Updated Color Scheme
- Red accent colors (`#c44569`, `#ff6b9d`) replacing gold
- Matches the poster's red ribbon theme
- Updated CTA buttons with red gradient

#### New Content Sections
- **Enhanced Music Section**: Critical analyses of Berlioz and Mahler song cycles
  - Historical context and compositional innovations
  - Thematic interpretations
  - Connections to The Unknowable's narrative

#### Visual Enhancements
- Hero particle effects (40 animated sparkles)
- Red-themed accent lines and highlights
- Enhanced button styling with red gradients

## Technical Implementation

### Cookie Management
```javascript
// Set cookie (365 days)
setCookie('intro_seen', 'true', 365);

// Check cookie on load
if (getCookie('intro_seen') === 'true') {
    window.location.href = 'index.html#video';
}
```

### Scroll Detection
```javascript
const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

// Growing text starts at 60% scroll
if (scrollPercent > 0.6) {
    const growScale = 1 + (scrollPercent - 0.6) * 15;
    // ...
}

// Transition triggers at 90% scroll
if (scrollPercent > 0.9 && !hasTransitioned) {
    transitionToMain();
}
```

### Particle System
- CSS-based animations using custom properties
- Random positioning and motion vectors
- Staggered animation delays for organic movement
- Radial gradients with glow effects

## Usage

### Standard Flow
1. User visits the site → lands on `Welcome`
2. User scrolls through narrative experience
3. At 90% scroll → automatic transition to `index.html#video`
4. Cookie set → future visits skip intro

### Direct Access
- Visitors can always access `index.html` directly
- Skip button provides immediate bypass option
- Cookie can be cleared to re-experience intro

## Design Inspiration

### From The Unknowable Poster
- Deep purple background (#1a0a2e, #3d1f5c)
- Red ribbon/sash (#c44569, #ff6b9d)
- Sparkle particle effects
- Elegant script typography (Cinzel font)
- Intimate theatrical atmosphere

### From Jon Bois's 17776
- Infinite scroll narrative format
- Progressive text scaling
- Immersive, participatory experience
- Automatic content progression
- "Crawling down the well" engagement model

## Browser Compatibility

- Modern browsers with CSS animation support
- JavaScript enabled required for scroll effects
- Graceful degradation with "Skip" button fallback
- Responsive design for mobile and tablet

## Customization

### Adjust Scroll Sensitivity
In `Welcome`, modify the scroll thresholds:
```javascript
if (scrollPercent > 0.6) // Start growing text
if (scrollPercent > 0.9) // Trigger transition
```

### Change Particle Count
```javascript
const particleCount = 50; // Adjust number of particles
```

### Modify Cookie Duration
```javascript
setCookie('intro_seen', 'true', 365); // Days until expiry
```

### Clear Cookie (for testing)
Run in browser console:
```javascript
document.cookie = 'intro_seen=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
```

## Credits

**Design & Development**: Inspired by Jon Bois's *17776* narrative structure and The Unknowable poster aesthetics

**Music**:
- Hector Berlioz - *Les nuits d'été*
- Gustav Mahler - *Lieder eines fahrenden Gesellen*

**Composer & Librettist**: Benjamin T. Rossen
