/* @ds-bundle: {"format":4,"namespace":"ElmDesignSystem_d74325","components":[{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/feedback/Badge.jsx":"c00e452d00c6","components/feedback/Dialog.jsx":"2845387c6e81","components/feedback/Tag.jsx":"266f9f4ec897","components/feedback/Toast.jsx":"5770f3b8bd0d","components/feedback/Tooltip.jsx":"bcc4ab7605cc","components/forms/Button.jsx":"2dfc4e4ea53e","components/forms/Checkbox.jsx":"b98fd1bbd223","components/forms/IconButton.jsx":"21022e9dc38b","components/forms/Input.jsx":"ad6ec40b958a","components/forms/Radio.jsx":"485af37b43a1","components/forms/Select.jsx":"6849539eae01","components/forms/Switch.jsx":"354fdf88fe6d","components/layout/Card.jsx":"3d2ec719aa81","components/navigation/Tabs.jsx":"717bbfdded2e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ElmDesignSystem_d74325 = window.ElmDesignSystem_d74325 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/feedback/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = "navy"
}) {
  const tones = {
    navy: {
      background: "var(--color-navy-900)",
      color: "#fff"
    },
    blue: {
      background: "var(--color-blue-600)",
      color: "#fff"
    },
    purple: {
      background: "var(--color-purple-600)",
      color: "#fff"
    },
    orange: {
      background: "var(--color-orange-500)",
      color: "#fff"
    },
    neutral: {
      background: "var(--gray-100)",
      color: "var(--text-primary)"
    }
  };
  return React.createElement("span", {
    style: {
      ...tones[tone],
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 500,
      padding: "3px 10px",
      borderRadius: "var(--radius-full)",
      display: "inline-block"
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose
}) {
  if (!open) return null;
  return React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "oklch(0.15 0.04 267/.45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-body)"
    }
  }, React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: "24px",
      width: "360px"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "12px"
    }
  }, React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: "16px",
      color: "var(--text-primary)"
    }
  }, title), React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: "pointer",
      color: "var(--text-muted)"
    }
  }, "×")), React.createElement("div", {
    style: {
      fontSize: "14px",
      color: "var(--text-secondary)",
      lineHeight: "var(--leading-relaxed)"
    }
  }, children)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: "var(--text-primary)",
      background: "var(--surface-sunken)",
      border: "1px solid var(--border-default)",
      padding: "4px 10px",
      borderRadius: "var(--radius-sm)"
    }
  }, children, onRemove && React.createElement("span", {
    onClick: onRemove,
    style: {
      cursor: "pointer",
      color: "var(--text-muted)"
    }
  }, "×"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = "navy",
  title,
  message,
  onClose
}) {
  const tones = {
    navy: "var(--color-navy-900)",
    success: "var(--success)",
    warning: "var(--warning)",
    danger: "var(--danger)"
  };
  return React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "flex-start",
      background: "#fff",
      border: "1px solid var(--border-default)",
      borderLeft: `3px solid ${tones[tone]}`,
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-md)",
      padding: "12px 16px",
      fontFamily: "var(--font-body)",
      maxWidth: "340px"
    }
  }, React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && React.createElement("div", {
    style: {
      fontWeight: 500,
      fontSize: "13px",
      color: "var(--text-primary)",
      marginBottom: "2px"
    }
  }, title), React.createElement("div", {
    style: {
      fontSize: "13px",
      color: "var(--text-secondary)"
    }
  }, message)), onClose && React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: "pointer",
      color: "var(--text-muted)"
    }
  }, "×"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--color-navy-900)",
      color: "#fff",
      fontSize: "11px",
      padding: "5px 9px",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      fontFamily: "var(--font-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  icon = null,
  children,
  onClick
}) {
  const pad = {
    sm: "6px 14px",
    md: "10px 20px",
    lg: "13px 26px"
  }[size];
  const fontSize = {
    sm: "13px",
    md: "14px",
    lg: "16px"
  }[size];
  const base = {
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    borderRadius: "var(--radius-md)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: pad,
    fontSize,
    transition: "background var(--duration-fast) var(--ease-standard),opacity var(--duration-fast)",
    opacity: disabled ? .5 : 1
  };
  const variants = {
    primary: {
      background: "var(--color-navy-900)",
      color: "#fff"
    },
    accent: {
      background: "var(--brand-accent)",
      color: "#fff"
    },
    secondary: {
      background: "var(--surface-page)",
      color: "var(--color-navy-900)",
      border: "1px solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-navy-900)"
    }
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  return React.createElement("button", {
    style,
    disabled,
    onClick
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-primary)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1
    }
  }, React.createElement("input", {
    type: "checkbox",
    checked,
    onChange,
    disabled,
    style: {
      width: "18px",
      height: "18px",
      accentColor: "var(--color-navy-900)"
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  onClick
}) {
  const dim = {
    sm: "28px",
    md: "36px",
    lg: "44px"
  }[size];
  const variants = {
    primary: {
      background: "var(--color-navy-900)",
      color: "#fff"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-navy-900)"
    },
    outline: {
      background: "var(--surface-page)",
      color: "var(--color-navy-900)",
      border: "1px solid var(--border-strong)"
    }
  };
  const style = {
    ...variants[variant],
    width: dim,
    height: dim,
    borderRadius: "var(--radius-full)",
    border: variants[variant].border || "1px solid transparent",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "background var(--duration-fast) var(--ease-standard)"
  };
  return React.createElement("button", {
    style,
    onClick,
    "aria-label": label,
    title: label
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  disabled = false
}) {
  return React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--text-secondary)",
      width: "100%"
    }
  }, label, React.createElement("input", {
    type,
    placeholder,
    value,
    disabled,
    onChange,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      padding: "10px 12px",
      borderRadius: "var(--radius-md)",
      border: `1px solid ${error ? "var(--danger)" : "var(--border-strong)"}`,
      color: "var(--text-primary)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-page)",
      outline: "none"
    }
  }), error && React.createElement("span", {
    style: {
      color: "var(--danger)",
      fontSize: "12px"
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-primary)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1
    }
  }, React.createElement("input", {
    type: "radio",
    name,
    checked,
    onChange,
    disabled,
    style: {
      width: "18px",
      height: "18px",
      accentColor: "var(--color-navy-900)"
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false
}) {
  return React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--text-secondary)",
      width: "100%"
    }
  }, label, React.createElement("select", {
    value,
    onChange,
    disabled,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      padding: "10px 12px",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border-strong)",
      color: "var(--text-primary)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-page)",
      outline: "none"
    }
  }, options.map((o, i) => React.createElement("option", {
    key: i,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-primary)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1
    }
  }, React.createElement("span", {
    onClick: disabled ? undefined : () => onChange && onChange(!checked),
    style: {
      width: "38px",
      height: "22px",
      borderRadius: "var(--radius-full)",
      background: checked ? "var(--color-navy-900)" : "var(--gray-300)",
      position: "relative",
      transition: "background var(--duration-fast) var(--ease-standard)",
      display: "inline-block"
    }
  }, React.createElement("span", {
    style: {
      position: "absolute",
      top: "2px",
      left: checked ? "18px" : "2px",
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      background: "#fff",
      transition: "left var(--duration-fast) var(--ease-standard)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function Card({
  title,
  subtitle,
  children,
  elevated = false
}) {
  return React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      border: elevated ? "none" : "1px solid var(--border-default)",
      boxShadow: elevated ? "var(--shadow-md)" : "none",
      padding: "20px",
      fontFamily: "var(--font-body)"
    }
  }, title && React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: "16px",
      color: "var(--text-primary)",
      marginBottom: subtitle ? "2px" : "10px"
    }
  }, title), subtitle && React.createElement("div", {
    style: {
      fontSize: "13px",
      color: "var(--text-secondary)",
      marginBottom: "10px"
    }
  }, subtitle), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active = 0,
  onChange
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      gap: "4px",
      borderBottom: "1px solid var(--border-default)",
      fontFamily: "var(--font-body)"
    }
  }, tabs.map((t, i) => React.createElement("div", {
    key: i,
    onClick: () => onChange && onChange(i),
    style: {
      padding: "10px 16px",
      fontSize: "14px",
      fontWeight: i === active ? 500 : 400,
      color: i === active ? "var(--color-navy-900)" : "var(--text-secondary)",
      borderBottom: i === active ? "2px solid var(--color-navy-900)" : "2px solid transparent",
      cursor: "pointer",
      transition: "color var(--duration-fast)"
    }
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
