#ifndef MYOBJECT_H
#define MYOBJECT_H

#include <napi.h>

class MyObject : public Napi::ObjectWrap<MyObject> {
 public:
  static void Init(Napi::Env env, Napi::Object exports);
  static Napi::Object NewInstance(Napi::Env env, Napi::Value arg);
  MyObject(const Napi::CallbackInfo& info);
  double Val() const { return m_val; }

 private:
  double m_val;
};

#endif