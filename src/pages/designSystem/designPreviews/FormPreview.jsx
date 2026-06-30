import {useState} from 'react';
import {CheckIcon} from '@/components/ui/Icons';

function validate(name, value) {
  switch (name) {
    case 'email':
      if (!value) return '이메일을 입력해주세요';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return '올바른 이메일 형식이 아닙니다';
      return '';
    case 'password':
      if (!value) return '비밀번호를 입력해주세요';
      if (value.length < 8) return '8자 이상 입력해주세요';
      if (!/[A-Z]/.test(value)) return '대문자를 하나 이상 포함해주세요';
      if (!/[0-9]/.test(value)) return '숫자를 하나 이상 포함해주세요';
      return '';
    default:
      return '';
  }
}

function PasswordStrength({value}) {
  const checks = [
    {label: '8자 이상', ok: value.length >= 8},
    {label: '대문자 포함', ok: /[A-Z]/.test(value)},
    {label: '숫자 포함', ok: /[0-9]/.test(value)},
    {label: '특수문자 포함', ok: /[^A-Za-z0-9]/.test(value)},
  ];
  const score = checks.filter((c) => c.ok).length;
  const colors = ['', 'bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-green-500'];

  if (!value) return null;

  return (
    <div className="mt-2 space-y-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
              i <= score ? colors[score] : 'bg-[var(--color-border-md)]'
            }`}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1">
        {checks.map((c) => (
          <div
            key={c.label}
            className="flex items-center gap-1.5 text-xs"
            style={{color: c.ok ? 'var(--color-text-accent)' : 'var(--color-text-muted)'}}
          >
            <span>{c.ok ? '✓' : '○'}</span> {c.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function Field({label, name, type = 'text', value, error, touched, onChange, onBlur, placeholder}) {
  const hasError = touched && error;
  const isOk = touched && !error && value;

  return (
    <div>
      <label className="block text-xs font-semibold mb-1.5 text-[var(--color-text-sub)]">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
          onBlur={() => onBlur(name)}
          className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-ui border"
          style={{
            background: 'var(--color-bg-sub)',
            color: 'var(--color-text)',
            borderColor: hasError ? '#f87171' : isOk ? '#4ade80' : 'var(--color-border-md)',
          }}
        />
        {isOk && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-400">
            <CheckIcon />
          </span>
        )}
      </div>
      {hasError && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
      {name === 'password' && <PasswordStrength value={value} />}
    </div>
  );
}

export default function FormPreview() {
  const [values, setValues] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({email: '', password: ''});
  const [touched, setTouched] = useState({email: false, password: false});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name, value) => {
    setValues((prev) => ({...prev, [name]: value}));
    if (touched[name]) {
      setErrors((prev) => ({...prev, [name]: validate(name, value)}));
    }
  };

  const handleBlur = (name) => {
    setTouched((prev) => ({...prev, [name]: true}));
    setErrors((prev) => ({...prev, [name]: validate(name, values[name])}));
  };

  const handleSubmit = () => {
    const newTouched = {email: true, password: true};
    const newErrors = {
      email: validate('email', values.email),
      password: validate('password', values.password),
    };
    setTouched(newTouched);
    setErrors(newErrors);
    if (!newErrors.email && !newErrors.password) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
    }
  };

  return (
    <div className="space-y-4">
      <Field
        label="이메일"
        name="email"
        type="email"
        placeholder="hello@example.com"
        value={values.email}
        error={errors.email}
        touched={touched.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Field
        label="비밀번호"
        name="password"
        type="password"
        placeholder="Password1"
        value={values.password}
        error={errors.password}
        touched={touched.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button onClick={handleSubmit} className="btn-primary w-full justify-center !py-2.5">
        {submitted ? (
          <>
            <CheckIcon /> 제출 완료!
          </>
        ) : (
          '제출'
        )}
      </button>
      <p className="text-xs text-[var(--color-text-muted)] text-center">
        blur 이후부터 에러가 표시됩니다
      </p>
    </div>
  );
}
