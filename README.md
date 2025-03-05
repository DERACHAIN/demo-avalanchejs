# Demo AvalancheJS

Example codes for AvalancheJS usage, including NodeID converter, NodePOP verification.

## Prerequisites

- Node v20

## Install

```sh
$ npm install
```

## Build

```sh
$ npm run build
```

## Run

- Convert NodeID to `bytes`

```sh
$ npm run start convertNodeId <nodeid-str>
```

Example:

```sh
$ npm run start convertNodeId NodeID-2mhirVhzPrgDMc1nZVJwXSXg8dKr9YwGh
```

- Verify Node POP

```sh
$ npm run start verifyPop <public-key-str> <pop-str>
```

Example:

```sh
$ npm run start verifyPop 0xb899613a28e1f55b250d587c9171fa241d11ec490f860f1b4cb8f33e7aa081956ce66c999b48d0b7712911522cc64c68 0xa3b7ca2b66ffc5e878f095d9267adfc531e13d8e6e075ec544eb60594c4286b55974721640d4c5ce6f446e37dd75d2ce02670aa2a8da9c9e11342b8bf41441a7bf3084547a941d0745e5a8190c73d10966cd2f06f281e68e22b0434f0ba14f78
```
