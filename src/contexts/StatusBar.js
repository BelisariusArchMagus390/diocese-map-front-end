import { StatusBar } from 'expo-status-bar'
import { createContext, useState } from 'react'
import { SafeAreaView } from 'react-native'

export const StatusBarContext = createContext({
  statusBarVisibility: false,
  toggleStatusBarVisibility: (/** @type {Boolean} */ state) => {}
})

export const StatusBarProvider = ({ children, statusBarColor = '#367BC1' }) => {
  const [statusBarVisibility, statusBarVisibilityChanger] = useState(false)
  /**
 *
 * @param {boolean} state new status bar visibility state
 */
  function toggleStatusBarVisibility (state) {
    statusBarVisibilityChanger(() => state)
  }

  return (
    <StatusBarContext.Provider value={{
      statusBarVisibility,
      toggleStatusBarVisibility
    }}>
      <SafeAreaView style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: '#367BC1'
      }}>
        <StatusBar
          animated={true}
          hidden={statusBarVisibility}
          hideTransitionAnimation='slide'
          style='auto'
          backgroundColor={statusBarColor}
        />
        {children}
      </SafeAreaView>
    </StatusBarContext.Provider>
  )
}
