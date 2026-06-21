import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import '../auth.form.scss'

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({ email, password })
        navigate('/')
    }

    if (loading) {
        return (
            <main className="auth-loading">
                <div className="auth-loading__spinner" />
                <p>Signing you in...</p>
            </main>
        )
    }

    return (
        <main className="auth-page">
            {/* Ambient background orbs */}
            <div className="auth-orb auth-orb--1" />
            <div className="auth-orb auth-orb--2" />
            <div className="auth-orb auth-orb--3" />

            <div className="auth-layout">

                {/* ── Hero / Left Panel ── */}
                <div className="auth-hero">
                    <div className="auth-hero__inner">
                        <div className="auth-logo auth-logo--hero">
                            <span className="auth-logo__resu">Resu</span><span className="auth-logo__ai">AI</span>
                        </div>
                        <h1 className="auth-hero__headline">
                            Outsmart the ATS.<br />Land Your Dream Role.
                        </h1>
                        <p className="auth-hero__sub">
                            Upload your resume, analyze missing keywords, and generate a perfectly tailored FAANG-ready profile in seconds.
                        </p>
                        <div className="auth-hero__pills">
                            <span className="auth-pill">⚡ ATS Keyword Analysis</span>
                            <span className="auth-pill">🎯 FAANG-Ready Profiles</span>
                            <span className="auth-pill">🤖 AI-Powered</span>
                        </div>
                        <div className="auth-hero__stat-row">
                            <div className="auth-stat">
                                <span className="auth-stat__num">94%</span>
                                <span className="auth-stat__label">ATS Pass Rate</span>
                            </div>
                            <div className="auth-stat__divider" />
                            <div className="auth-stat">
                                <span className="auth-stat__num">50k+</span>
                                <span className="auth-stat__label">Resumes Analyzed</span>
                            </div>
                            <div className="auth-stat__divider" />
                            <div className="auth-stat">
                                <span className="auth-stat__num">30s</span>
                                <span className="auth-stat__label">Avg. Generation</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Auth Form / Right Panel ── */}
                <div className="auth-form-panel">
                    <div className="auth-card">
                        <div className="auth-card__header">
                            <div className="auth-logo auth-logo--card">
                                <span className="auth-logo__resu">Resu</span><span className="auth-logo__ai">AI</span>
                            </div>
                            <h2 className="auth-card__title">Welcome back</h2>
                            <p className="auth-card__subtitle">Sign in to continue your journey</p>
                        </div>

                        <form onSubmit={handleSubmit} className="auth-form">
                            <div className="auth-field">
                                <label htmlFor="email" className="auth-field__label">Email Address</label>
                                <div className="auth-field__wrapper">
                                    <span className="auth-field__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                    </span>
                                    <input
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        className="auth-field__input"
                                        autoComplete="email"
                                    />
                                </div>
                            </div>

                            <div className="auth-field">
                                <label htmlFor="password" className="auth-field__label">Password</label>
                                <div className="auth-field__wrapper">
                                    <span className="auth-field__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                    </span>
                                    <input
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        className="auth-field__input"
                                        autoComplete="current-password"
                                    />
                                </div>
                            </div>

                            <button type="submit" className="auth-btn auth-btn--primary">
                                <span>Sign In</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                            </button>
                        </form>

                        <p className="auth-card__footer-text">
                            Don't have an account?{' '}
                            <Link to="/register" className="auth-link">Create one for free</Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login