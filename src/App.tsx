import { useState } from 'react';
import { Button, Input, Link, Text } from './components';
import './styles/index.scss';

function App() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    return (
        <div className="container">
            <div className="demo-section">
                <Text variant="h1">UI Components</Text>
                <Text variant="body-sm">A minimal component library for dark interfaces</Text>
            </div>

            <div className="demo-section">
                <Text variant="h2">Buttons</Text>
                <div className="component-grid">
                    <div>
                        <Text variant="caption">Primary</Text>
                        <Button variant="primary" size="md">Click me</Button>
                    </div>
                    <div>
                        <Text variant="caption">Secondary</Text>
                        <Button variant="secondary" size="md">Click me</Button>
                    </div>
                    <div>
                        <Text variant="caption">Ghost</Text>
                        <Button variant="ghost" size="md">Click me</Button>
                    </div>
                </div>
            </div>

            <div className="demo-section">
                <Text variant="h2">Button Sizes</Text>
                <div className="component-grid">
                    <div>
                        <Text variant="caption">Small</Text>
                        <Button variant="primary" size="sm">Small</Button>
                    </div>
                    <div>
                        <Text variant="caption">Medium</Text>
                        <Button variant="primary" size="md">Medium</Button>
                    </div>
                    <div>
                        <Text variant="caption">Large</Text>
                        <Button variant="primary" size="lg">Large</Button>
                    </div>
                </div>
            </div>

            <div className="demo-section">
                <Text variant="h2">Inputs</Text>
                <div className="component-grid">
                    <div>
                        <Input
                            label="Full Name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            size="md"
                        />
                    </div>
                    <div>
                        <Input
                            label="Email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            size="md"
                        />
                    </div>
                    <div>
                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            size="md"
                        />
                    </div>
                </div>
            </div>

            <div className="demo-section">
                <Text variant="h2">Links</Text>
                <div className="component-grid">
                    <Link variant="primary" href="#">Primary Link</Link>
                    <Link variant="secondary" href="#">Secondary Link</Link>
                    <Link variant="ghost" href="#">Ghost Link</Link>
                </div>
            </div>

            <div className="demo-section">
                <Text variant="h2">Typography</Text>
                <div className="component-stack">
                    <Text variant="h1">Heading 1</Text>
                    <Text variant="h2">Heading 2</Text>
                    <Text variant="h3">Heading 3</Text>
                    <Text variant="h4">Heading 4</Text>
                    <Text variant="body">Body text - Regular weight with comfortable line height</Text>
                    <Text variant="body-sm">Small body text - Secondary information</Text>
                    <Text variant="caption">Caption text - Tertiary details</Text>
                </div>
            </div>
        </div>
    );
}

export default App;
