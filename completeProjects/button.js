// Create a button with properties
function createButton({
    label,
    type = 'button',
    onClick,
    disabled = false,
    size = 'medium',
    variant = 'primary',
    className = '',
    ariaLabel,
    isLoading = false,
    fullWidth = false,
    tooltip = '',
    icon = null,
    id = '',
    dataAttributes = {},
}) {
    const button = document.createElement('button');

    button.type = type;
    button.className = `button button-${variant} button-${size} ${className} ${fullWidth ? 'button-fullwidth' : ''}`;
    button.disabled = disabled;
    button.setAttribute('aria-label', ariaLabel || label);
    button.setAttribute('data-tooltip', tooltip);

    if (id) {
        button.id = id;
    }

    Object.keys(dataAttributes).forEach(key => {
        button.setAttribute(`data-${key}`, dataAttributes[key]);
    });

    if (isLoading) {
        const loader = document.createElement('span');
        loader.className = 'loader';
        button.appendChild(loader);
    } else if (icon) {
        const iconElement = document.createElement('span');
        iconElement.className = 'button-icon';
        iconElement.innerHTML = icon;
        button.appendChild(iconElement);
    }

    const text = document.createTextNode(label);
    button.appendChild(text);

    if (onClick) {
        button.addEventListener('click', onClick);
    }

    return button;
}

// Function to create and append multiple buttons
function addButtons() {
    const buttonContainer = document.getElementById('button-container');

    // Button 1: Primary Button with Click Alert
    const button1 = createButton({
        label: 'Click Me',
        onClick: () => alert('Primary button clicked!'),
        variant: 'primary'
    });
    buttonContainer.appendChild(button1);

    // Button 2: Success Button with Loading State
    const button2 = createButton({
        label: 'Loading',
        variant: 'success',
        isLoading: true
    });
    buttonContainer.appendChild(button2);

    // Button 3: Danger Button with Tooltip
    const button3 = createButton({
        label: 'Danger',
        variant: 'danger',
        tooltip: 'This is a danger button'
    });
    buttonContainer.appendChild(button3);

    // Button 4: Secondary Button with Icon
    const button4 = createButton({
        label: 'With Icon',
        variant: 'secondary',
        icon: '🔍'
    });
    buttonContainer.appendChild(button4);

    // Button 5: Large Button with Full Width
    const button5 = createButton({
        label: 'Full Width',
        size: 'large',
        fullWidth: true,
        variant: 'primary'
    });
    buttonContainer.appendChild(button5);

    // Button 6: Disabled Button
    const button6 = createButton({
        label: 'Disabled',
        variant: 'secondary',
        disabled: true
    });
    buttonContainer.appendChild(button6);

    // Button 7: Button with Data Attributes
    const button7 = createButton({
        label: 'Data Attr',
        variant: 'success',
        dataAttributes: { test: 'value' }
    });
    buttonContainer.appendChild(button7);
}

// Add buttons to the DOM
addButtons();
