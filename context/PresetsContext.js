import React, { createContext } from 'react';

const PresetsContext = createContext({
    presets: [{title: "Bubble Tea"}],
    updatePresets: () => {}
  })

export default PresetsContext;