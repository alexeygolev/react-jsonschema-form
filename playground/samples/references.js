module.exports = {
  schema: {
    definitions: {
      address: {
        type: "object",
        properties: {
          street_address: { type: "string" },
          city:           { type: "string" },
          state:          { type: "string" }
        },
        required: ["street_address", "city", "state"]
      }
    },
    type: "object",
    properties: {
      billing_address: { $ref: "#/definitions/address" },
      shipping_address: { $ref: "#/definitions/address" }
    }
  },
  uiSchema: {
    "ui:order": ["shipping_address", "billing_address"]
  },
  formData: {
    billing_address: {
      street_address: "21, Jump Street",
      city: "Babel",
      state: "Neverland"
    },
    shipping_address: {
      street_address: "221B, Baker Street",
      city: "London",
      state: "N/A"
    }
  }
};
