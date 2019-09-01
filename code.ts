figma.showUI(__html__, { width: 240, height: 200 });
figma.ui.onmessage = msg => {
    if (msg.type === 'minimise') {
        figma.ui.resize(240,20);
    }
    if (msg.type === 'maximise') {
        figma.ui.resize(240,200);
    }
    // figma.closePlugin();
};
