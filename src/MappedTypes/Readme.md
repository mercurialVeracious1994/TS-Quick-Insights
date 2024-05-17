### Mapped Type

A mapped type is a generic type which uses a union of PropertyKeys (frequently created via a keyof) to iterate through keys to create a type:


    type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
    };

### Mapping Modifiers

There are two additional modifiers which can be applied during mapping: readonly and ? which affect mutability and optionality respectively.

You can remove or add these modifiers by prefixing with - or +. If you don’t add a prefix, then + is assumed.

### Go to File MappingModifiers.ts

